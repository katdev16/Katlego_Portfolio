let isFooterOpen = false;
function TopFunction() {
  // alert("Hello");

  const footer = document.getElementsByClassName("MainBackground")[0];
  const arrow = document.getElementsByClassName("slider1")[0];
  const footerText = document.getElementById("MainBackgroundText");


  
 // Add transitions
  footer.style.transition = "height 0.6s ease";
  arrow.style.transition = "transform 0.6s ease";


  if (!isFooterOpen) {
    footer.style.height = "600px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "block"; // Show text
  } else {
    footer.style.height = "30px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; // Hide text
    arrow.style.height = "20px";
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
}
function toggleFooter() {

  const footer = document.getElementsByClassName("rectangle")[0];
  const arrow = document.getElementsByClassName("arrowup")[0];
  const footerText = document.getElementById("footerText");


  
 // Add transitions
  footer.style.transition = "height 0.6s ease";
  arrow.style.transition = "transform 0.6s ease";


  if (!isFooterOpen) {
    footer.style.height = "400px";
    arrow.style.transform = "rotate(180deg)";
    footerText.style.display = "block"; 
  } else {
    footer.style.height = "30px";
    arrow.style.transform = "rotate(0deg)";
    footerText.style.display = "none"; 
  }

  arrow.style.transition = "transform 0.6s ease";
  isFooterOpen = !isFooterOpen;
  console.log(isFooterOpen);
}



const SelectedDomains = ['All'];
function handleDomainClick(event) {
    // selected div element by id
  const domain = event.currentTarget.id;

  // selected div block by id
  const domainElement = document.getElementById(domain);

  
    console.log(SelectedDomains);
    const lastElement = SelectedDomains[SelectedDomains.length-1]
    const firstElement =SelectedDomains[0]

    console.log("-------")
    console.log(domain)
     console.log("-------")

    // document.getElementById('web-developmentProject').style.display = 'none';
    // document.getElementById('designsProject').style.display = 'block';
    // document.getElementById('case-studiesProject').style.display = 'block';
    
    if(domain === 'web-development'){
      console.log('in web dev')
      
      document.getElementById('designsProject').style.display = 'none';
      document.getElementById('case-studiesProject').style.display = 'none';
      document.getElementById('web-developmentProject').style.display = 'block';
    }else if(domain === 'designs'){
      document.getElementById('web-developmentProject').style.display = 'none';
      document.getElementById('case-studiesProject').style.display = 'none';
      document.getElementById('designsProject').style.display = 'block';

    }else if(domain === 'case-studies'){

      document.getElementById('web-developmentProject').style.display = 'none';
      document.getElementById('designsProject').style.display = 'none';
      document.getElementById('case-studiesProject').style.display = 'block';
    }else if(domain === 'All'){

      document.getElementById('web-developmentProject').style.display = 'block';
      document.getElementById('designsProject').style.display = 'block';
      document.getElementById('case-studiesProject').style.display = 'block';
    }
  

    if(SelectedDomains.length > 0){
      // if(domain){}

      document.getElementById(lastElement).style.backgroundColor = 'white';
      document.getElementById(lastElement).style.color = 'black';
      // firstElement.style.backgroundColor = 'orange';
      domainElement.style.backgroundColor = 'orange';
      domainElement.style.color = 'white';
      SelectedDomains.pop();
      SelectedDomains.push(domain);
     
    }else{
      console.log('first ' + firstElement)
      console.log('last ' + lastElement)
      domainElement.style.backgroundColor = 'orange';
      domainElement.style.color = 'white';
      SelectedDomains.push(domain);

      

    } 
    
    // console.log(SelectedDomains);
  

}


