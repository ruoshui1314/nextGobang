cc.exports = cc.exports || {}
var GobangType = cc.Enum(
{
    P2C:1,
    C2C:2
});

cc.Class({
    extends: cc.Component,

    startP2CGame:function(){
        cc.director.loadScene('Game');
        cc.exports.curType = GobangType.P2C;
    },
    startC2CGame:function(){
        cc.director.loadScene('Game');
        cc.exports.curType = GobangType.C2C;
    }
});

cc.exports.NextGobangType = GobangType;
