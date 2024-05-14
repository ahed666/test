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
    const rect = aboutSection.getBoundingClientRect();
    const rectVideo = videoSection.getBoundingClientRect();
   
    const st = window.pageYOffset || document.documentElement.scrollTop;
    let scrollup=st < lastScrollTop;
    let percentage=distance/total;

    percentage=Math.max(0,percentage);
    percentage=Math.min(percentage,1);
    console.log(percentage)
    if(video.duration>0)
        {
            currentTime=video.duration*percentage;
            if(currentTime===video.duration)
                video.currentTime=currentTime-0.2;
            else
            video.currentTime=currentTime;
            
            if(currentTime===video.duration&&rect.top<=700&&!scrollup)
                { videoSection.style.opacity='0';
            videoSection.classList.add('slide-out');

                    
                    
                }
            else if(rectVideo.bottom>700){
                { videoSection.style.opacity='1';
                videoSection.classList.add('slide-in');

              
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
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