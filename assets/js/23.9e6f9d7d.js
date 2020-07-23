(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{202:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[s._v("#")]),s._v(" 快速开始")]),s._v(" "),a("h2",{attrs:{id:"服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),a("h3",{attrs:{id:"设置gopath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置gopath"}},[s._v("#")]),s._v(" 设置GoPath")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果你的 Go version >= 1.11，并且 GO111MODULE=on (Go MOdule模式) 那么请忽略以下 gopath 配置；")])]),s._v(" "),a("h4",{attrs:{id:"gopath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gopath"}},[s._v("#")]),s._v(" gopath")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" goadmin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./goadmin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./src\n")])])]),a("blockquote",[a("p",[s._v("为什么要设置src目录")])]),s._v(" "),a("p",[s._v("因为 GO 的包搜索是从 GOPATH 和 GOROOT 路径下搜索，源码必须要放在 GOROOT 或 GOPATH 的 src 目录下才能找到。但把源码和包放在一起，对于很多人来说确实不太很习惯，有一种做法，通过在 GOPATH 中设置两个路径，go get 下载的包默认放在 GOPATH 设置的第一个路径下。比如，GOPATH 设置如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zhangwenjian/go/:/Users/zhangwenjian/Work/go\n")])])]),a("p",[s._v("如此就可以把工作区设在 /Users/zhangwenjian/Work/go/src，而安装包放在 /Users/zhangwenjian/go/src。")]),s._v(" "),a("h3",{attrs:{id:"下载源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[s._v("#")]),s._v(" 下载源码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin.git\n")])])]),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./go-admin\ngo build\n")])])]),a("h3",{attrs:{id:"设置数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置数据库"}},[s._v("#")]),s._v(" 设置数据库")]),s._v(" "),a("p",[s._v("首先找到配置文件，"),a("code",[s._v("config/settings.yml")]),s._v("， 同时也可创建开发环境配置，只需将默认配置文件 "),a("code",[s._v("config/settings.yml")]),s._v(" 复制到 "),a("code",[s._v("config/settings.dev.yml")]),s._v(" 就好了")]),s._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/configv1.0.0.png",height:"500px"}}),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目启动环境            ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dev开发环境 test测试环境 prod线上环境；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机ip 或者域名，默认0.0.0.0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin   \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("   \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readtimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("writertimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件存放路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" temp/logs\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JWT加密字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过期时间单位：秒")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dbname \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("       \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库用户名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root   \n")])])]),a("blockquote",[a("p",[s._v("首先，需要修改数据库信息：")])]),s._v(" "),a("div",{staticClass:"language-说明 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("database: 节点下是数据库配置类信息\ndatabase.database: 数据库名称\ndatabase.dbtype: 数据库类型。目前支持：mysql\ndatabase.host: 数据库地址，填写网络ip地址或者域名。mysql类型，如：127.0.0.1；\ndatabase.password: 数据库密码\ndatabase.port: 数据库端口号\ndatabase.username: 数据库用户名\n")])])]),a("h3",{attrs:{id:"数据库结构初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库结构初始化"}},[s._v("#")]),s._v(" 数据库结构初始化")]),s._v(" "),a("p",[s._v("项目中支持使用命令方式初始化基本数据结构和基础数据。 可以方便的使用 "),a("code",[s._v("init")]),s._v(" 命令进行项目数据库结构和数据初始化。如下操作：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./go-admin init -c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("config/settings.dev.yml\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("可以通过 -c 参数实现本地多环境配置文件隔离 例如 开发环境命名为：settings.dev.yml")])]),s._v(" "),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("p",[s._v("初始化完成之后，我们就可以启动项目了，在这里需要注意一点，正常大家启动项目的方式是这样的 "),a("code",[s._v("./go-admin")]),s._v(" , 哦哦 系统报错了，我们尝试一下 "),a("code",[s._v("./go-admin")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./go-admin\n")])])]),a("p",[s._v("下图是输出内容：")]),s._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/runv1.0.0noarg.png",height:"100px"}}),s._v(" "),a("p",[s._v("输出内容告诉我们：Error: requires at least one arg ，至少有一个参数；")]),s._v(" "),a("p",[s._v("你也可以使用"),a("code",[s._v("./go-admin -h")]),s._v(" 来查看帮助；")]),s._v(" "),a("p",[s._v("上面讲完之后，我们就可以使用自己的启动语句来启动项目了，")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./go-admin server -c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("config/settings.dev.yml\n")])])]),a("p",[s._v("如果看到一下数据内容，请检查一下数据库配置；")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/06 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":38:52 root:password@tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/dbname\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/06 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":38:52 mysql connect error %v dial tcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3306: connect: connection refused\n")])])]),a("p",[s._v("输出内容为下图，恭喜你！你已经成功了！")]),s._v(" "),a("p",[a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/serversuccessv1.0.0.png",height:"500px"}})]),s._v(" "),a("p",[s._v("go，下一步启动前端项目！")]),s._v(" "),a("h2",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[s._v("#")]),s._v(" 视图")]),s._v(" "),a("h3",{attrs:{id:"设置视图工作路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置视图工作路径"}},[s._v("#")]),s._v(" 设置视图工作路径")]),s._v(" "),a("p",[s._v("返回上上级目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n")])])]),a("h3",{attrs:{id:"下载视图源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载视图源码"}},[s._v("#")]),s._v(" 下载视图源码")]),s._v(" "),a("p",[s._v("这里我们直接"),a("code",[s._v("git clone")]),s._v("下来。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin-ui.git\n")])])]),a("p",[s._v("输出内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin-ui.git\nCloning into "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go-admin-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nremote: Enumerating objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v(", done.\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v("/584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("436")]),s._v("/436"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nReceiving objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v("/584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("580.92")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.00")]),s._v(" KiB/s, done.\nResolving deltas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("/127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\n")])])]),a("blockquote",[a("p",[s._v("恭喜！到目前为止说明go-admin-ui代码已经下载完成。")])]),s._v(" "),a("h3",{attrs:{id:"npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install"}},[s._v("#")]),s._v(" npm install")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" go-admin-ui/\n\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i  \n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm i   --registry=https://registry.npm.taobao.org   # 国内请使用  ")]),s._v("\n\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这里还原包是需要一些时间的请耐心等待一下...")])]),s._v(" "),a("p",[s._v("看到下边的输入说明已经安装好了")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Binary found at /Users/zhangwenjian/Code/go-test/go-admin-ui/node_modules/node-sass/vendor/darwin-x64-64/binding.node\nTesting binary\nBinary is fine\nadded "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2033")]),s._v(" packages from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1953")]),s._v(" contributors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(".229s\n")])])]),a("h3",{attrs:{id:"启动-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-2"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("p",[s._v("启动项目，使用"),a("code",[s._v("npm run dev")]),s._v("命令就好了。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])])]),a("p",[s._v("输出内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" DONE  Compiled successfully "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 22188ms                                                                                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":47:40 AM\n\n\n  App running at:\n  - Local:   http://localhost:9530/\n  - Network: http://192.168.3.12:9530/\n\n  Note that the development build is not optimized.\n  To create a production build, run "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build.\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("此时项目已经启动了，但是有一点请注意：检查api是否也启动了。否则页面会提示错误的哦。")])]),s._v(" "),a("h2",{attrs:{id:"搞定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搞定"}},[s._v("#")]),s._v(" 搞定")]),s._v(" "),a("p",[s._v("搞定，现在你可以go-admin 之旅！")])])}],!1,null,null,null);t.default=n.exports}}]);