webpackJsonp([15],{SDxK:function(e,t,r){t=e.exports=r("FZ+f")(!0),t.push([e.i,"\n.get-code .ivu-form-item-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.get-code .btn-get-code {\n  width: 110px;\n  margin-left: 10px;\n}\n.get-code .code-item {\n  width: 100%;\n  position: relative;\n}\n.register-submit {\n  height: 40px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n","",{version:3,sources:["/Users/zhangze/www/blog/www/src/components/Sign/Register/Register.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;CAClB",file:"Register.vue",sourcesContent:["\n.get-code .ivu-form-item-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.get-code .btn-get-code {\n  width: 110px;\n  margin-left: 10px;\n}\n.get-code .code-item {\n  width: 100%;\n  position: relative;\n}\n.register-submit {\n  height: 40px;\n  font-size: 15px;\n  margin-top: 10px;\n}\n"],sourceRoot:""}])},Skw2:function(e,t,r){"use strict";function s(e){r("ateR")}Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){var e=this;return{sendStatus:!1,codeMsg:"获取验证码",formRegister:{username:"",email:"",captchaCode:"",password:"",password_confirmation:""},ruleRegister:{username:[{validator:function(e,t,r){""===t?r(new Error("用户名不能为空")):r()},trigger:"blur"}],email:[{validator:function(e,t,r){""===t?r(new Error("邮箱不能为空")):/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)?r():r(new Error("邮箱格式不正确"))},trigger:"blur"}],captchaCode:[{validator:function(e,t,r){""===t?r(new Error("验证码不能为空")):r()},trigger:"blur"}],password:[{validator:function(e,t,r){""===t?r(new Error("密码不能为空")):r()},trigger:"blur"}],password_confirmation:[{validator:function(t,r,s){""===r?s(new Error("确认密码不能为空")):r!==e.formRegister.password?s(new Error("两次密码输入不一致")):s()},trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.$Loading.start(),t.axios.post("/register",t.formRegister).then(function(e){"10000"===e.data.code?(t.$Message.success("注册成功"),t.$emit("update:tabName","login")):t.$Message.error(e.data.message)}).catch(function(e){t.$Message.error("系统错误")}),t.$Loading.finish()):t.$Message.error("注册失败")})},sendCaptchaCode:function(){var e=this;""===this.formRegister.email?this.$Message.error("邮箱不能为空!"):(this.$Loading.start(),this.axios.post("/verification_code/send",{email:this.formRegister.email}).then(function(t){"10000"===t.data.code?e.$Message.success("邮件发送成功"):e.$Message.error(t.data.message),e.sendStatus=!0;var r=58;e.codeMsg="59秒后重试";var s=setInterval(function(){e.codeMsg=r+"秒后重试",0===--r&&(e.sendStatus=!1,e.codeMsg="重新发送",clearInterval(s))},1e3)}).catch(function(t){e.$Message.error("系统错误")}),this.$Loading.finish())}}},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Row",[r("Form",{ref:"formRegister",attrs:{model:e.formRegister,rules:e.ruleRegister,"label-position":"top"}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{placeholder:"用户名"},model:{value:e.formRegister.username,callback:function(t){e.$set(e.formRegister,"username",t)},expression:"formRegister.username"}})],1),e._v(" "),r("FormItem",{attrs:{prop:"email"}},[r("Input",{attrs:{placeholder:"邮箱"},model:{value:e.formRegister.email,callback:function(t){e.$set(e.formRegister,"email",t)},expression:"formRegister.email"}})],1),e._v(" "),r("FormItem",{staticClass:"get-code",attrs:{prop:"captchaCode"}},[r("div",{staticClass:"code-item"},[r("Input",{attrs:{placeholder:"验证码"},model:{value:e.formRegister.captchaCode,callback:function(t){e.$set(e.formRegister,"captchaCode",t)},expression:"formRegister.captchaCode"}})],1),e._v(" "),r("Button",{staticClass:"btn-get-code",attrs:{type:"primary",disabled:e.sendStatus},on:{click:e.sendCaptchaCode}},[e._v(e._s(e.codeMsg))])],1),e._v(" "),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formRegister.password,callback:function(t){e.$set(e.formRegister,"password",t)},expression:"formRegister.password"}})],1),e._v(" "),r("FormItem",{attrs:{prop:"password_confirmation"}},[r("Input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.formRegister.password_confirmation,callback:function(t){e.$set(e.formRegister,"password_confirmation",t)},expression:"formRegister.password_confirmation"}})],1),e._v(" "),r("FormItem",[r("Button",{staticClass:"register-submit",attrs:{type:"success",long:""},on:{click:function(t){e.handleSubmit("formRegister")}}},[e._v("注册")])],1)],1)],1)},n=[],i={render:a,staticRenderFns:n},c=i,d=r("VU/8"),l=s,m=d(o,c,!1,l,null,null);t.default=m.exports},ateR:function(e,t,r){var s=r("SDxK");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("30d36056",s,!0)}});
//# sourceMappingURL=15.ba82ae38a29e7c9f926b.js.map