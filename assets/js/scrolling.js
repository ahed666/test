const video = document.getElementById('hero-video');
const aboutElement = document.getElementById('about');
const videoSection = document.querySelector('section.vid');
const aboutSection = document.querySelector('section.about');
// aboutSection.classList.add('hidden');
 let isPlaying = false;
 let scrollDirection = 0;
 let lastScrollTop = 0;

 const scroll=() => {
   
    const distance=window.scrollY-videoSection.offsetTop;
    const distanceabout=window.scrollY-aboutSection.offsetTop;

    const total=videoSection.clientHeight- window.innerHeight;
    const totalabout=aboutSection.clientHeight- window.innerHeight;
    let percentage=distance/total;
    percentage=Math.max(0,percentage);
    percentage=Math.min(percentage,1);

    if(video.duration>0)
        {
            video.currentTime=video.duration*percentage;
               console.log(totalabout,total,distanceabout,distance)
            if(video.currentTime===video.duration&&total-distance<100)
                { videoSection.style.opacity='0';
                    
                }
            else{
                { videoSection.style.opacity='1';
               
                }
            }
        }
        
}
 window.addEventListener('scroll', scroll);


//  const st = window.pageYOffset || document.documentElement.scrollTop;
//  if (st > lastScrollTop) {
//      video.currentTime = (st/(6000/video.duration));
//      console.log(st,video.currentTime);
//      // if(video.currentTime === video.duration)
//      // {event.preventDefault();
//      // 	aboutElement.style.display='block';

//      // }
//      // else{
//      // 	aboutElement.style.display='none';
//      // }
//  } else if (st < lastScrollTop) {
//      video.currentTime =(st/(6000/video.duration));
//      console.log(st,video.currentTime);
//  }
//  lastScrollTop = st <= 0 ? 0 : st;