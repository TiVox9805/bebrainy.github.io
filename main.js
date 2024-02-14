// Thay đổi nội dung búc thư ở đây
var letterContent = "Hôm nay là Valentine thứ 2 của anh với bé ạ hehe, hôm nay cũng xui khi hem gặp đi chơi với bé Valentine được ạ :(, mè hoi hem seo ạ chừng đi bù ạ hehe, chúc Bé iu brainy của anh luôn vui vẻ hạnh phúc ,xinh đẹp hơn nữa nè, dễ thương hơn nè, học giỏi hơn nè, và luôn luôn Brainy để iu anh hơn nữa nè ạ hehe <3. Và cuối cùng là ANH YÊU BÉ <3 rất nhiều ạ (quà anh sẽ tặng sau nha ạ iu ạ :3)"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})