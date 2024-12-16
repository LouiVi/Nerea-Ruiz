"use strict"

function About()
{
    //Show about dialog.
    this.Show = function()
    {
        dlgPub.Show();
    }

    //Handle contact via email button.
    this.btnContact_OnTouch = function()
    {
         app.SendMail( "mycompany@mycompany.com", "MyCompany - Query", 
    		      "Please help me!" );
    }
    
    //Create dialog window.
    var dlgPub = app.CreateDialog( "About" );
    var layPub = app.CreateLayout( "linear", "vertical,fillxy" );
    layPub.SetPadding( 0.05, 0.05, 0.05, 0 );
    
    //Add an icon to top layout.
    var img = app.CreateImage( "Img/1000059471-removebg.png", 0.46);
    img.SetPosition( drawerWidth*0.06, 0.04 );
    layPub.AddChild( img );
    
    //Create a text with formatting.
    var text = "<p>Nerea Ramírez " + 
        "<a href=http://www.google.com>My Link</a></p>";
    var txt = app.CreateText( text, 0.8, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    layPub.AddChild( txt );
    
    //Create contact button.
    var btnContact = app.CreateButton( "Contact Us", 0.63, 0.1 );
    btnContact.SetMargins( 0,0,0,0.02 );
    btnContact.SetOnTouch( this.btnContact_OnTouch );
    layPub.AddChild( btnContact );
    
    //Add dialog layout and show dialog.
    dlgPub.AddLayout( layPub );
}

