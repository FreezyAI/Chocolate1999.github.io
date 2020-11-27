const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页zfe.space!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b1.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b2.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b3.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b4.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b5.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b6.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b7.jpg",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b8.jpg",
		],
		//这里是磁贴描述信息
		describe:[
			"HEXO搭建教程",
			"我们的征途是星辰大海",
			"前端学习记录",
			"回顾过去",
			"学习源码思想",
			"算法灵魂之问",
			"面试复盘总结",
			"项目点点滴滴",
			
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");
$(".color-card").eq(0).css({"display":"none" })
//隐藏出现在列表中的第一个磁贴

$(".color-card").eq(1).css({"display":"none" })
//隐藏出现在列表中的第二个磁贴