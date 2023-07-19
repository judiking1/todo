
const bgImage = document.createElement("img");
bgImage.classList.add("bg");
// const KEY = "p4YpqiShrzx5S68gfhgMOFfAiDcTCXDdB394iIeQdVA";
// const aa = `https://api.unsplash.com/photos/random/?client_id=${KEY}&query=nature&orientation=landscape`;
// function fetchImage(){
//     fetch(aa).then((response)=>response.json()).then((data)=>
//     {
//     console.log(data),
//     bgImage.src = `${data.urls.full}`;
//     },
//     ).catch((error) => console.error('Error:', error));
// }

// 그냥 사용하고싶으면 https://source.unsplash.com/random/ 으로!!
function freeImage(){
    const timestamp = new Date().getTime();
    bgImage.src = `https://source.unsplash.com/1920x1080/?nature,landscape&${timestamp}`;
}
freeImage();

document.body.appendChild(bgImage);
setInterval(freeImage, 60000);

// 페이지 로딩시 바로 실행
// fetchImage();

// 시간당 50토큰
// 2분 30초마다 새로고침
// setInterval(fetchImage, 150000);



