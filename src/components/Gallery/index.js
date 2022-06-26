import react from "react";
import "./style.css"

function Gallery() {
const galleryImages = [
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/286379821_525061606018800_5840302111751902791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EI-ZlSA2IysAX8cCoqK&_nc_ht=scontent-msp1-1.xx&oh=00_AT8Lc-JQW4ULMgGG0VKfGIp1rMmLxTZDyDT3Wz-bgNAWig&oe=62BC5D2E`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/286510622_525061609352133_2270192763093778426_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UBfyAqF2hOIAX_nXYoc&_nc_ht=scontent-msp1-1.xx&oh=00_AT9P26BHoU3OJpx2ToFmAnECI4MMziqz56qPesJbhUzowg&oe=62BDC88F`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/286416607_525061619352132_3582839828599491200_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6_Ma9_ybaXYAX-7Rm94&_nc_ht=scontent-msp1-1.xx&oh=00_AT_2UjSVMpZb4gQ7344kciCf7eaN6LDR_R63dqrPStShMg&oe=62BC7252`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/284087073_515489066976054_3986748971483637748_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fkPPf4SBamoAX-2z-fS&_nc_oc=AQkK4fAw9qC_TTA7jhoBYgvT9kn6QMJ89kwg7vdjuv2J4755FS2HpPQoCoUD8BOTvDVCTsDSKRGw-LKXK2ZjBZ_u&_nc_ht=scontent-msp1-1.xx&oh=00_AT8TV46xnj4xiLh0yiKz1rV1pnLNfxoq5ExQhgcDiTIGHw&oe=62BC113F`},
  {link: 'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/278906209_495525332305761_6716074881305620053_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ToB4nke5RqcAX-9RH2j&_nc_ht=scontent-msp1-1.xx&oh=00_AT96SFoJUcXgfuBW24VMv9a_zPLAlSYUoR2Xx3hf_wO4sg&oe=62BC5929'},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279369889_502274884964139_7309258273340924306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wy25B308C18AX-s7ngH&_nc_ht=scontent-msp1-1.xx&oh=00_AT_uZs4LARinAoUo8vtuZcrjuNF7MOO_Dw1k6UoWmG4F0A&oe=62BBEB8A`},
  {link: 'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279364678_498129285378699_4953573681984495882_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C8etgI6uhV8AX9IzN6q&_nc_ht=scontent-msp1-1.xx&oh=00_AT9kM-CxunH8zivQwyHK4JHaEnHy5OL9Q23afBYPqrPcZQ&oe=62BC18BA'},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279271366_498129272045367_5895604415744725163_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Cb3D3smQuxQAX_hdGs9&_nc_ht=scontent-msp1-1.xx&oh=00_AT8gv6I-U6NZIzevix9xSYOYdFXiGgLqWNUvgR0k3j1ciQ&oe=62BC82C1`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279151192_498129425378685_3066136451882041842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qt7dyTCBEK0AX95IAjl&_nc_ht=scontent-msp1-1.xx&oh=00_AT_T1gBYP18p0ebscfZHOYSdtgISei35hJEt1e0kLpolAw&oe=62BDD728`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279143113_498129422045352_6385748303414718983_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oWtdkAoUVgAAX_h_Sk7&tn=dckUHFrBWLQBsxGs&_nc_ht=scontent-msp1-1.xx&oh=00_AT_DodxcZyLw8LTAHhj6h6UdkjTO9k6BVCFVwM0cWJr5Qg&oe=62BBF790`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/278940914_495525265639101_8478825573029481059_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Yig_p4ZoMFMAX-VVJbS&_nc_ht=scontent-msp1-1.xx&oh=00_AT8NUrodIUrc2LBkX-qjRxyHuI0e0tyjBXcAfLUKid74YQ&oe=62BC25DB`},
  {link: `https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/278547201_493659452492349_1860071397722693924_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7O7g63T_kHEAX_xatKK&_nc_ht=scontent-msp1-1.xx&oh=00_AT8GoQCHu6CW8IQkc8Hlxoyv9TliJHdSoCQ9soWoSq8YsA&oe=62BD85AA`}
]

return (
  <div className="gallery container">
  {galleryImages.map((image, i) => (
     <div className="item">
         <img src={image.link} alt="nail designs" />
     </div>
     ))}
 </div>


)
}

export default Gallery;