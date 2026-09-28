var e=16e3,t=`
class Captura extends AudioWorkletProcessor {
  constructor() {
    super();
    this.pas = sampleRate / ${e};
    this.pos = 0;
    this.anterior = 0;
    this.sortida = new Int16Array(640);
    this.n = 0;
    this.suma = 0;
    this.blocs = 0;
  }
  emet(v) {
    v = Math.max(-1, Math.min(1, v));
    this.sortida[this.n++] = v < 0 ? v * 0x8000 : v * 0x7fff;
    if (this.n === this.sortida.length) {
      const pcm = this.sortida.buffer;
      this.port.postMessage({ pcm }, [pcm]);
      this.sortida = new Int16Array(640);
      this.n = 0;
    }
  }
  process(entrades) {
    const c = entrades[0] && entrades[0][0];
    if (!c || !c.length) return true;
    let pos = this.pos;
    while (pos < c.length - 1) {
      if (pos < 0) this.emet(this.anterior + (c[0] - this.anterior) * (pos + 1));
      else {
        const i = Math.floor(pos);
        this.emet(c[i] + (c[i + 1] - c[i]) * (pos - i));
      }
      pos += this.pas;
    }
    this.pos = pos - c.length;
    this.anterior = c[c.length - 1];
    for (let i = 0; i < c.length; i++) this.suma += c[i] * c[i];
    if (++this.blocs >= 30) {
      this.port.postMessage({ nivell: Math.min(1, Math.sqrt(this.suma / (this.blocs * c.length)) * 4) });
      this.suma = 0;
      this.blocs = 0;
    }
    return true;
  }
}
registerProcessor('captura-16k', Captura);
`;function n(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)}function r(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);let r=new Int16Array(n.buffer,0,n.length>>1),i=new Float32Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e]/32768;return i}var i=class{o;estat=`connectant`;enviats=0;rebuts=0;ws=null;ctx=null;mic=null;node=null;sortida=null;proper=0;fonts=new Set;rellotge=0;visitant=``;personatge=``;acabada=!1;constructor(e){this.o=e}get parlant(){return!!this.ctx&&this.fonts.size>0&&this.proper>this.ctx.currentTime}get activa(){return!this.acabada}async comenca(){this.posaEstat(`connectant`);try{this.mic=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return this.acaba(`micro`,`error`)}if(this.acabada)return this.allibera();try{let e=window.AudioContext??window.webkitAudioContext;this.ctx=new e,await this.ctx.resume();let n=URL.createObjectURL(new Blob([t],{type:`text/javascript`}));await this.ctx.audioWorklet.addModule(n),URL.revokeObjectURL(n),this.node=new AudioWorkletNode(this.ctx,`captura-16k`),this.ctx.createMediaStreamSource(this.mic).connect(this.node);let r=this.ctx.createGain();r.gain.value=0,this.node.connect(r).connect(this.ctx.destination),this.sortida=this.ctx.createGain(),this.sortida.connect(this.ctx.destination)}catch{return this.acaba(`micro`,`error`)}let r;try{r=await this.o.obteToken()}catch{return this.acaba(`token`,`error`)}if(this.acabada)return this.allibera();try{await this.connecta(r)}catch{return this.acaba(`xarxa`,`error`)}if(this.acabada)return this.allibera();this.node.port.onmessage=t=>{t.data.pcm&&this.envia({realtimeInput:{audio:{data:n(t.data.pcm),mimeType:`audio/pcm;rate=${e}`}}},!0),t.data.nivell!==void 0&&this.o.enNivell?.(t.data.nivell)},this.rellotge=window.setTimeout(()=>this.atura(`temps`),Math.max(10,Math.min(r.segons,240))*1e3),this.posaEstat(`escoltant`)}enviaText(e){this.envia({realtimeInput:{text:e}})}atura(e=`visitant`){this.acaba(e,`aturada`)}connecta(e){return new Promise((t,n)=>{let r=new WebSocket(`wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.${e.versio}.GenerativeService.BidiGenerateContentConstrained?access_token=${encodeURIComponent(e.token)}`);r.binaryType=`arraybuffer`,this.ws=r;let i=window.setTimeout(()=>n(Error(`setup`)),12e3),a=!1;r.onopen=()=>{r.send(JSON.stringify({setup:{model:`models/${e.model}`}}))},r.onmessage=e=>{let n=this.llegeix(e.data);if(n){if(n.setupComplete&&!a){a=!0,clearTimeout(i),t();return}this.rep(n)}},r.onerror=()=>{a||(clearTimeout(i),n(Error(`ws`)))},r.onclose=()=>{a?this.acabada||this.acaba(`xarxa`,`aturada`):(clearTimeout(i),n(Error(`ws`)))}})}llegeix(e){try{let t=typeof e==`string`?e:new TextDecoder().decode(e);return JSON.parse(t)}catch{return null}}envia(e,t=!1){this.ws?.readyState!==WebSocket.OPEN||this.acabada||(this.ws.send(JSON.stringify(e)),t&&this.enviats++)}rep(e){if(e.goAway){this.atura(`temps`);return}let t=e.toolCall?.functionCalls??[];if(t.length){for(let e of t)e.name&&this.o.enAccio(e.name,e.args??{});this.envia({toolResponse:{functionResponses:t.map(e=>({id:e.id,name:e.name,response:{result:`ok`,scheduling:this.o.reprodueix?`WHEN_IDLE`:`SILENT`}}))}})}let n=e.serverContent;if(n){n.interrupted&&this.buida(),n.inputTranscription?.text&&(this.visitant+=n.inputTranscription.text,this.o.enText(`visitant`,this.visitant.trim(),!1)),n.outputTranscription?.text&&(this.tancaVisitant(),this.personatge+=n.outputTranscription.text,this.o.enText(`personatge`,this.personatge.trim(),!1));for(let e of n.modelTurn?.parts??[])e.inlineData?.data&&this.sona(e.inlineData.data);n.turnComplete&&(this.tancaVisitant(),this.personatge.trim()&&this.o.enText(`personatge`,this.personatge.trim(),!0),this.personatge=``)}}tancaVisitant(){this.visitant.trim()&&this.o.enText(`visitant`,this.visitant.trim(),!0),this.visitant=``}sona(e){if(this.rebuts++,!this.o.reprodueix||!this.ctx||!this.sortida)return;let t=r(e);if(!t.length)return;let n=this.ctx.createBuffer(1,t.length,24e3);n.copyToChannel(t,0);let i=this.ctx.createBufferSource();i.buffer=n,i.connect(this.sortida);let a=Math.max(this.ctx.currentTime+.04,this.proper);i.start(a),this.proper=a+n.duration,this.fonts.add(i),i.onended=()=>this.fonts.delete(i)}buida(){for(let e of this.fonts)try{e.stop()}catch{}this.fonts.clear(),this.proper=0}posaEstat(e,t){this.estat=e,this.o.enEstat(e,t)}acaba(e,t){if(!this.acabada){if(this.acabada=!0,clearTimeout(this.rellotge),this.ws?.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({realtimeInput:{audioStreamEnd:!0}}))}catch{}this.tancaVisitant(),this.personatge.trim()&&this.o.enText(`personatge`,this.personatge.trim(),!0),this.personatge=``,this.allibera(),this.posaEstat(t,e)}}allibera(){try{this.ws?.close()}catch{}this.mic?.getTracks().forEach(e=>e.stop()),this.node?.disconnect(),this.buida(),this.ctx?.close().catch(()=>{}),this.ws=null,this.mic=null,this.node=null,this.ctx=null}};export{i as SessioVeu};