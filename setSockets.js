function setSockets(){
    this.socket  = io("https://pricenotifications.herokuapp.com/");
    setInterval(function() {jQuery('div.coin').children('b').each(function(){
      var currency = jQuery(this).text().split(':')[0];
      if(currency==="XRP/INR"){
        ripple = {
          price: jQuery(this).text().split(':')[1].trim()
        }; 
        socket.emit('sendPrices', ripple);
      }
    })}, 2000);
}