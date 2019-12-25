(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{227:function(v,l,_){"use strict";_.r(l);var r=_(2),i=Object(r.a)({},(function(){var v=this,l=v.$createElement,_=v._self._c||l;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"lsv介绍"}},[v._v("LSV介绍:")]),v._v(" "),_("h4",{attrs:{id:"lvs-linux-virtual-server-负载调度器-集成内核-章文嵩"}},[v._v("LVS: Linux Virtual Server, 负载调度器, 集成内核 章文嵩")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.linuxvirtualserver.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官网 http://www.linuxvirtualserver.org/"),_("OutboundLink")],1)]),v._v(" "),_("li",[v._v("VS: Virtual Server, 负责调度")]),v._v(" "),_("li",[v._v("RS: Real Server, 负责提供服务")]),v._v(" "),_("li",[v._v("L4: 四层路由器或交换机\n"),_("img",{attrs:{src:"https://ahriknow.oss-cn-beijing.aliyuncs.com/media/abook/lvs.png",alt:"LVS 拓扑图"}})])]),v._v(" "),_("h4",{attrs:{id:"工作原理-vs根据请求报文的目标ip和目标协议及端口将其调度转发至某rs-根据调度算法来挑选rs"}},[v._v("工作原理: VS根据请求报文的目标IP和目标协议及端口将其调度转发至某RS, 根据调度算法来挑选RS")]),v._v(" "),_("h4",{attrs:{id:"iptables-netfilter"}},[v._v("iptables/netfilter:")]),v._v(" "),_("ul",[_("li",[v._v("iptables: 用户空间的管理工具")]),v._v(" "),_("li",[v._v("netfilter: 内核空间上的框架")]),v._v(" "),_("li",[v._v("流入: PREROUTING --\x3e INPUT")]),v._v(" "),_("li",[v._v("流出: OUTPUT --\x3e POSTROUTING")]),v._v(" "),_("li",[v._v("转发: PREROUTING --\x3e FORWARD --\x3e POSTROUTING")]),v._v(" "),_("li",[v._v("DNAT: 目标地址转换; PREROUTING")])]),v._v(" "),_("h2",{attrs:{id:"lvs概念"}},[v._v("LVS概念:")]),v._v(" "),_("h4",{attrs:{id:"lvs-集群类型中的术语"}},[v._v("lvs 集群类型中的术语:")]),v._v(" "),_("ul",[_("li",[v._v("VS: Virtual Server(lvs), Director Server(DS)\n"),_("ul",[_("li",[v._v("Dispantcher(调度器), Load Balancer")])])]),v._v(" "),_("li",[v._v("RS: Real Server(lvs), upstream server(nginx)\n"),_("ul",[_("li",[v._v("backend server(haproxy)")])])]),v._v(" "),_("li",[v._v("CIP: Client IP")]),v._v(" "),_("li",[v._v("VIP: Virtual server IP")]),v._v(" "),_("li",[v._v("DIP: Director IP")]),v._v(" "),_("li",[v._v("RIP: Real server IP")]),v._v(" "),_("li",[v._v("访问流程: CIP <--\x3e VIP == DIP <--\x3e RIP")])]),v._v(" "),_("h2",{attrs:{id:"lvs集群的类型"}},[v._v("lvs集群的类型:")]),v._v(" "),_("h4",{attrs:{id:"lvs-ipvsadm-ipvsadm"}},[v._v("lvs: ipvsadm/ipvsadm")]),v._v(" "),_("ul",[_("li",[v._v("ipvsadm: 用户空间的命令行工具, 规则管理器, 用于管理集群服务及RealServer")]),v._v(" "),_("li",[v._v("ipvs: 工作与内核空间netfilter的INPUT钩子上的框架")])]),v._v(" "),_("h4",{attrs:{id:"lvs集群的类型-2"}},[v._v("lvs集群的类型:")]),v._v(" "),_("ul",[_("li",[v._v("lvs-nat: 修改请求报文的目标IP, 多目标IP的DNAT")]),v._v(" "),_("li",[v._v("lvs-dr: 操纵封装新的MAC地址")]),v._v(" "),_("li",[v._v("lvs-tun: 在原请求IP报文之外新加一个IP首部")]),v._v(" "),_("li",[v._v("lvs-fullnat: 修改请求报文的源和目标IP")])]),v._v(" "),_("h2",{attrs:{id:"lvs-nat模式"}},[v._v("lvs-nat模式:")]),v._v(" "),_("h4",{attrs:{id:"lvs-nat"}},[v._v("lvs-nat:")]),v._v(" "),_("p",[v._v("本质是多目标IP的DNAT, 通过将请求报文中的目标地址和目标端口修改为某挑出的RS的RIP和PORT实现转发")]),v._v(" "),_("ul",[_("li",[v._v("RIP和DIP应在同一个IP网络, 且应使用私网地址, RS的网关要只想DIP")]),v._v(" "),_("li",[v._v("请求报文和相应报文都必须经由Director转发, Director易于成为系统瓶颈")]),v._v(" "),_("li",[v._v("支持端口映射, 可修改请求报文的目标PORT")]),v._v(" "),_("li",[v._v("VS必须是Linux系统, RS可以是任意OS")])]),v._v(" "),_("h2",{attrs:{id:"lvs-dr模式"}},[v._v("lvs-dr模式:")]),v._v(" "),_("h4",{attrs:{id:"lvs-dr"}},[v._v("lvs-dr:")]),v._v(" "),_("p",[v._v("Direct Routing, 直接路由, LVS默认模式, 应用最广泛, 通过为请求报文重新封装一个MAC首部进行转发\n, 源MAC是DIP所在的接口的MAC, 目标MAC是某挑选出的RS的RIP所在接口的MAC地址, 以及目标IP/PORT均保持不变")]),v._v(" "),_("ul",[_("li",[v._v("Director和各RS都配置有VIP")]),v._v(" "),_("li",[v._v("确保前端路由器将目标IP为VIP的请求报文法网Director\n"),_("ul",[_("li",[v._v("在前端网关做静态绑定VIP和Director的MAC地址")]),v._v(" "),_("li",[v._v("在RS上使用arptables工具\n"),_("ul",[_("li",[_("code",[v._v("arptables -A IN -d $VIP -j DROP")])]),v._v(" "),_("li",[_("code",[v._v("arptables -A OUT -s $VIP -j mangle --mangle-ip-s $RIP")])])])]),v._v(" "),_("li",[v._v("在RS上修改内核参数以限制arp通告及应答级别\n"),_("ul",[_("li",[_("code",[v._v("/prop/sys/net/ipv4/conf/all/arp_ignore")])]),v._v(" "),_("li",[_("code",[v._v("/prop/sys/net/ipv4/conf/all/arp_announce")])])])])])])]),v._v(" "),_("h2",{attrs:{id:"lvs-tun模式"}},[v._v("lvs-tun模式")]),v._v(" "),_("h4",{attrs:{id:"lvs-tun"}},[v._v("lvs-tun:")]),v._v(" "),_("p",[v._v("转发方式: 不修改请求报文的IP首部(源IP为CIP, 目标IP为VIP), 而在原IP报文之外再封装一个IP首部(源IP为DIP, 目标IP为RIP), 将报文发往挑目标RS, RS直接响应给客户端(源IP为VIP, 目标IP为CIP)")]),v._v(" "),_("ul",[_("li",[v._v("RS的网关一般不能指向DIP")]),v._v(" "),_("li",[v._v("请求报文要经过 Director, 但相应不能经由Director")]),v._v(" "),_("li",[v._v("不支持端口映射")]),v._v(" "),_("li",[v._v("支持隧道")])]),v._v(" "),_("Valine")],1)}),[],!1,null,null,null);l.default=i.exports}}]);