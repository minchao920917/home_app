const convertImgToBase64 = (url,callback)=>{

    var Img = new Image(),
        dataURL='';
        // Img.setAttribute("crossOrigin",'Anonymous')
        Img.crossOrigin = "Anonymous";

        // Img.setAttribute('crossorigin', 'anonymous');
        Img.src=url;
        Img.onload=function(){ //要先确保图片完整获取到，这是个异步事件
            var canvas = document.createElement("canvas"), //创建canvas元素
            width=Img.width, //确保canvas的尺寸和图片一样
            height=Img.height;
            canvas.width=width;
            canvas.height=height;
            canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
            dataURL= canvas.toDataURL("image/png"); //转换图片为dataURL
            callback(dataURL)
            canvas = null;
        };
}

export {
    convertImgToBase64
}