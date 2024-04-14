"use strict"

//Create a Home object.
function Home( path, layContent )
{
var self = this, s = 0.25;

    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) {
        lay.Animate("FadeIn");
        self.Anim();
        }
        else {
        lay.Animate( "FadeOut" );
        }
    }
    
    this.Anim = function ()
    {
    	if(s <= 1.0){
    		s += 0.01;
    	}else{
    	s = 0.01;
    	}
    	img.SetSize( (s*2), s  );
    	//img.Move( 0.1, 0.25  );
    	img.SetPaintColor( "#333333" );
    	img.DrawText("Quiero que me enlechen!", 1, 1);
    	img.Update();
    	setTimeout(self.Anim, 215);
    }
    
    this.ready = function ()
{
	video.Play();
}

this.error = function (error)
{
  alert(error);
}

    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,HCenter,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    var video = app.CreateVideoView( 1.0, 0.5 );
    video.SetOnReady( self.ready );
    video.SetOnError( self.error );
    
    lay.AddChild( video );
    video.SetFile( "Misc/Video.Guru_20230906_222604021.mp4" );
    //Add a logo.
	var img = app.CreateImage( "Img/Nerea Ruiz.png", 0.25, -1, "Alias");
	img.SetAutoUpdate(  true);
	//img.Rotate( 45, 0, 0 );
	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 14 );
    txt.SetTextColor( "#444444" );
    //lay.AddChild( txt );
    
}