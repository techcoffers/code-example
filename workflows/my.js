      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.fillBox1', {
        duration: 2,
        ease: "none",
        height: '100%',
        scrollTrigger: {
          trigger: '.fillLine1',
          start: "top 80%",
          end: 'bottom 70%',
          scrub: true
        }
        
      });
  
      gsap.to('.c1', {
        duration: 0.1,
        backgroundColor: "#2874f0",
        border: "none",  
        color:"#ffffff",      
        scrollTrigger: {
          trigger: '.c1',
          start: "80% 80%",
          end: 'bottom top',          
          toggleActions: "play none none reset"
        }
  
      });
  
      gsap.to('.c2', {
        backgroundColor: "#2874f0",
        duration: 0.1,
        border: "none",
        color:"#ffffff",    
        scrollTrigger: {
          trigger: '.c2',
          start: "80% 80%",
          end: 'bottom top',
          toggleActions: "play none none reset"
        }
  
      });
  
      gsap.to('.c3', {
        backgroundColor: "#2874f0",
        duration: 0.1,
        border: "none",
        color:"#ffffff",    
        scrollTrigger: {
          trigger: '.c3',
          start: "80% 80%",
          end: 'bottom top',
          toggleActions: "play none none reset",
        }
  
      });
      gsap.to('.c4', {
        backgroundColor: "#2874f0",
        duration: 0.1,
        border: "none",
        color:"#ffffff",    
        scrollTrigger: {
          trigger: '.c4',
          start: "80% 80%",
          end: 'bottom top',
          toggleActions: "play none none reset",
        }
  
      });
      gsap.to('.c5', {
        backgroundColor: "#2874f0",
        duration: 0.1,
        border: "none",
        color:"#ffffff",    
        scrollTrigger: {
          trigger: '.c5',
          start: "80% 80%",
          end: 'bottom top',
          toggleActions: "play none none reset",
        }
  
      });

    



      // Here comes the on scroll text content


            
      const as1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".c1",
          start: "80% 80%",
          end: "bottom 10%",
          // markers:true,
          toggleActions: "play none none none"
        }
      });
      const as2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".c2",
          start: "40% 80%",
          end: "bottom top",
          // markers:true,
          toggleActions: "play none none reset"
        }
      });
      //as1.fromTo(".appear2 > p:nth-child(1)", {opacity: 1, y:10, ease: Back.easeOut, duration: 1})     
      
      //as2.to(".appear2 > p:nth-child(1)", {opacity: 1, y:10, ease: Back.easeOut, duration: 1})     
      
      
      
  
   