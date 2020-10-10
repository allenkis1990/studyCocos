let s = require('./assets/data1.js')
console.log(s);
cc.Class({
    extends: cc.Component,

    properties: {
        mySprite:{
            type:cc.Sprite,
            default:null
        },
        myString:{
            type:cc.Label,
            default:null
        }
    },

    // use this for initialization
    onLoad: function () {
        // let mySp = this.node.getChildByName('mySp')
        let myStr = this.node.getChildByName('myStr')
        setTimeout(()=>{
            this.mySprite.node.x -=100
            // this.myString.string = 'lwh'
            myStr.getComponent(cc.Label).string = 'lwh!!!'//改变label的值需要getComponent一下才可改
        },3000)


        //根据子节点名称查找
        // let myBtn = this.node.getChildByName('myBtn')
        // myBtn.on('click',()=>{
        //     alert(1)
        // })

        //根据全路劲查找孩子
        // let myLayout = cc.find('Canvas/mainView').getChildByName('myLayout')
        // myLayout.on('click',()=>{
        //     alert(1)
        // })

        //获取js组件里的alert方法
        let myCom = this.node.getChildByName('myCom')
        let myComScript = myCom.getComponent('MyComScript')
        // myComScript.alert()


        let mainView = this.find('Canvas/mainView').getComponent(cc.Layout)
        mainView.on('click',function(){
            alert('mainView')
        })
    },
    
    clickBtn(e,data){
        debugger
    },

    // called every frame
    update: function (dt) {

    },
});
