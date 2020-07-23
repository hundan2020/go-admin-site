(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{198:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"环境部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境部署"}},[s._v("#")]),s._v(" 环境部署")]),s._v(" "),a("h2",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),a("p",[s._v("配置服务器上的配置")]),s._v(" "),a("p",[s._v("新建/etc/nginx/conf.d/test.haimait.com.conf")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name test.haimait.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置前端静态文件目录")]),s._v("\n  location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      index index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      root /home/go/src/go-admin/dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置后台go服务api接口服务 代理到8877端口  ")]),s._v("\n  location ~ ^/goadminapi/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      proxy_set_header   Host             "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_set_header   X-Real-IP        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_set_header   X-Forwarded-For  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_set_header   X-Forwarded-Proto  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      rewrite ^/goadminapi/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ /"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      proxy_pass  http://127.0.0.1:8877"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("nginx -t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" //测试nginx配置是否正确\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("nginx -s reload"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" //重启nginx服务\n")])])]),a("h2",{attrs:{id:"打包go服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包go服务"}},[s._v("#")]),s._v(" 打包go服务")]),s._v(" "),a("h4",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("go-admin/config/settings.yml")])]),s._v(" "),a("p",[a("strong",[s._v("这里要填写你服务器上的mysql数据库的配置信息")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("settings:\n  application:\n    domain: localhost:8877\n    host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n    ishttps: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    mode: dev\n    name: testApp\n    port: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8877"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改端口,按自己需要")]),s._v("\n    readtimeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    writertimeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  database:\n    dbtype: mysql\n    host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n    name: goadmindb\n    password: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    username: root\n  jwt:\n    secret: go-admin\n    timeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\n  log:\n    dir: temp/logs\n  ssl:\n    key: keystring\n    pem: temp/pem.pem\n\n")])])]),a("h4",{attrs:{id:"修改默认端口的代码文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认端口的代码文件"}},[s._v("#")]),s._v(" 修改默认端口的代码文件")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("go-admin/cmd/api/server.go")])]),s._v(" "),a("p",[s._v("run方法里")]),s._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//if mode != "" {')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   config2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings.application.mode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//if port != "" {')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        config2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings.application.port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"编写自动打包上传的shell角本文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写自动打包上传的shell角本文件"}},[s._v("#")]),s._v(" 编写自动打包上传的shell角本文件")]),s._v(" "),a("h5",{attrs:{id:"新建打包角本-go-admin-build-go-admin-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建打包角本-go-admin-build-go-admin-sh"}},[s._v("#")]),s._v(" 新建打包角本 "),a("code",[s._v("go-admin/build-go-admin.sh")])]),s._v(" "),a("p",[a("strong",[s._v("注意")])]),s._v(" "),a("p",[s._v("如果是mac和windows自己百度go交叉编译的方法或者参考下面的地址")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/haima/p/12041833.html",target:"_blank"}},[s._v("Go语言Mac、Linux、Windows 下交叉编译")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# !/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是mac使用这个打包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o go-admin main.go")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是windows使用这个打包 自行测试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SET CGO_ENABLED=0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SET GOOS=linux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SET GOARCH=amd64")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# go build -o go-admin main.go")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是linux环境使用这个打包")]),s._v("\ngo build -o go-admin main.go\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"复制文件到服务器"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调用上传文件角本把打包好的go-admin二进制文件上传到服务器上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" ./scpToServer.sh "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$j")]),s._v("\n")])])]),a("h5",{attrs:{id:"新建上传角本-go-admin-scptoserver-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建上传角本-go-admin-scptoserver-sh"}},[s._v("#")]),s._v(" 新建上传角本 "),a("code",[s._v("/go-admin/scpToServer.sh")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect -f")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制go-admin(和上面的build-go-admin.sh打包文件名保持一致)二进制文件到服务器/home/go/src/go-admin目录 root:服务器用户名")]),s._v("\nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" go-admin root@182.92.234.123:/home/go/src/go-admin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  -re "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*es.*o.*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    exp_send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\n    exp_continue\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  -re "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*sword.*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    exp_send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这里是你的服务器密码'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ninteract\n")])])]),a("h4",{attrs:{id:"打包并上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包并上传"}},[s._v("#")]),s._v(" 打包并上传")]),s._v(" "),a("p",[s._v("​\t\n命令行里运行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" go-admin\nhaima@haima-PC:/media/haima/34E401CC64DD0E28/site/go/src/haimait/learn/go-admin/dome01/go-admin$ ./build-go-admin.sh \nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" go-admin root@182.92.234.111:/home/go/src/go-admin\nroot@182.92.234.111's password: \ngo-admin                                                                                                                                                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%   43MB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("635")]),s._v(".7KB/s   01:09  \n")])])]),a("p",[s._v("去服务器上查看已经上传到服务器上了")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZ2ze505h9bgsbp83ct28pZ ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /home/go/src/go-admin/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZ2ze505h9bgsbp83ct28pZ go-admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("43868")]),s._v("\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44920528")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" 06:53 go-admin\n")])])]),a("a",{attrs:{href:"https://gitee.com/mydearzwj/image/raw/master/img/bs1.gif",target:"_blank"}},[a("img",{attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/bs1.gif",alt:"",width:"100%"}})]),s._v(" "),a("h4",{attrs:{id:"编写后台启动go服务角本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写后台启动go服务角本"}},[s._v("#")]),s._v(" 编写后台启动go服务角本")]),s._v(" "),a("h5",{attrs:{id:"在服务器上新建go-admin-restart-sh文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在服务器上新建go-admin-restart-sh文件"}},[s._v("#")]),s._v(" 在服务器上新建go-admin/restart.sh文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除进程"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" go-admin "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#杀死运行中的go-admin服务进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"启动进程"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./go-admin server -c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("config/settings.yml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" access.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台启动服务将日志写入access.log文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" go-admin "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看运行用的进程")]),s._v("\n")])])]),a("h5",{attrs:{id:"上传config配置到服务器上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传config配置到服务器上"}},[s._v("#")]),s._v(" 上传config配置到服务器上")]),s._v(" "),a("p",[s._v("[root@iZ2ze505h9bgsbp83ct28pZ go-admin]# tree\n.\n├── config\n│   ├── db.sql\n│   ├── rbac_model.conf\n│   ├── READMEN.md\n│   ├── settings.dev.yml\n│   ├── settings.yml\n│   └── sqlite.sql\n├── go-admin\n└── restart.sh")]),s._v(" "),a("h5",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("p",[a("code",[s._v("./restart")])]),s._v(" "),a("h5",{attrs:{id:"后台启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台启动服务"}},[s._v("#")]),s._v(" 后台启动服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZ2ze505h9bgsbp83ct28pZ go-admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./restart.sh ")]),s._v("\n删除进程\ngo-admin: 未找到进程\n启动进程\nroot      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4033")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12324")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" pts/0    R+   07:39   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" go-admin\n")])])]),a("h4",{attrs:{id:"查看启动的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看启动的服务"}},[s._v("#")]),s._v(" 查看启动的服务")]),s._v(" "),a("p",[s._v("下面可以看到go-admin 的8877服务已经运行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZ2ze505h9bgsbp83ct28pZ go-admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -tpln")]),s._v("\nActive Internet connections "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("only servers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27650")]),s._v("/redis-server  \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:5355            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("921")]),s._v("/systemd-resolve \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1733")]),s._v("/nginx: master  \ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:22              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1041")]),s._v("/sshd           \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::3306                 :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14732")]),s._v("/mysqld        \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::8811                 :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27758")]),s._v("/./mindoc      \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::5355                 :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("921")]),s._v("/systemd-resolve \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::8877                 :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4031")]),s._v("/./go-admin     \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::80                   :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1733")]),s._v("/nginx: master  \ntcp6       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::8887                 :::*                    LISTEN      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16252")]),s._v("/./power       \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZ2ze505h9bgsbp83ct28pZ go-admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),a("h4",{attrs:{id:"更新go服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新go服务"}},[s._v("#")]),s._v(" 更新go服务")]),s._v(" "),a("p",[s._v("每次修改来代码后,想要更新到服务器上步骤.")]),s._v(" "),a("h5",{attrs:{id:"先删除服务器上的-home-go-src-go-admin-go-admin二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先删除服务器上的-home-go-src-go-admin-go-admin二进制文件"}},[s._v("#")]),s._v(" 先删除服务器上的/home/go/src/go-admin/go-admin二进制文件")]),s._v(" "),a("h5",{attrs:{id:"重复3-4和3-5步骤即可"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复3-4和3-5步骤即可"}},[s._v("#")]),s._v(" 重复3.4和3.5步骤即可")]),s._v(" "),a("h3",{attrs:{id:"打包前端文件并上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包前端文件并上传"}},[s._v("#")]),s._v(" 打包前端文件并上传")]),s._v(" "),a("h3",{attrs:{id:"修改配置文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件-2"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("p",[s._v("修改生产环境请求接口的配置文件")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("go-admin/dome01/go-admin-ui/.env.production")]),s._v("文件里的")]),s._v(" "),a("p",[a("code",[s._v("VUE_APP_BASE_API = 'http://test.haimait.com/goadminapi'")])]),s._v(" "),a("p",[s._v("这里的域名地址和1.2nginx里配置的go后台api接口地址 保持一致")]),s._v(" "),a("h3",{attrs:{id:"编写自动打包上传的shell角本文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写自动打包上传的shell角本文件-2"}},[s._v("#")]),s._v(" 编写自动打包上传的shell角本文件")]),s._v(" "),a("h5",{attrs:{id:"新建-go-admin-ui-npmbuild-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建-go-admin-ui-npmbuild-sh"}},[s._v("#")]),s._v(" 新建"),a("code",[s._v("/go-admin-ui/npmbuild.sh")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# !/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:prod\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"复制dist文件到服务器"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#调用scpToServer文件把本把打包好的dist文件夹上传到服务器上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" ./scpToServer.sh "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$j")]),s._v("\n")])])]),a("h5",{attrs:{id:"新建-go-admin-ui-scptoserver-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建-go-admin-ui-scptoserver-sh"}},[s._v("#")]),s._v(" 新建"),a("code",[s._v("/go-admin-ui/scpToServer.sh")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/expect -f")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制go-admin(和上面的build-go-admin.sh打包文件名保持一致)二进制文件到服务器/home/go/src/go-admin目录 root:服务器用户名")]),s._v("\nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -rC dist root@182.92.234.123:/home/go/src/go-admin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#######################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  -re "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*es.*o.*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    exp_send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v('"')]),s._v("\n    exp_continue\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  -re "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*sword.*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#exp_send "这里是你的服务器密码\\r"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ninteract\n")])])]),a("h3",{attrs:{id:"执行角本文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行角本文件"}},[s._v("#")]),s._v(" 执行角本文件")]),s._v(" "),a("p",[s._v("执行角本文件,打包并上传到服务器")]),s._v(" "),a("p",[a("code",[s._v("./npmbuild.sh")])]),s._v(" "),a("h3",{attrs:{id:"登陆后台页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登陆后台页面"}},[s._v("#")]),s._v(" 登陆后台页面")]),s._v(" "),a("p",[s._v("http://www.zhangwj.com")]),s._v(" "),a("p",[s._v("已经成功部署到线上了")]),s._v(" "),a("h3",{attrs:{id:"更新前端代码到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新前端代码到服务器"}},[s._v("#")]),s._v(" 更新前端代码到服务器")]),s._v(" "),a("p",[s._v("重复【执行角本文件】步骤,就会重新打包并覆盖到线上的dist目录文件了")]),s._v(" "),a("a",{attrs:{href:"https://gitee.com/mydearzwj/image/raw/master/img/bs2.gif",target:"_blank"}},[a("img",{attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/bs2.gif",alt:"",width:"100%"}})]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("特别感谢 海马同学 的支持，对文档的维护起到了至关重要的角色")])])])}],!1,null,null,null);t.default=e.exports}}]);