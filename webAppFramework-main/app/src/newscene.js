var gui;
var me = this;

function newScene()
{
    this.setup = function()
    {
        gui = createGui();

        setupHeaderButtons();    
    }

    this.enter = function()
    {
        //gui.show()
    }

    this.exit = function()
    {
        //gui.hide()
    }

    this.draw = function()
    {
        background('#aaaaaaa');

        push();
        showHeader(true);
    
        textAlign(LEFT);
        fill(0);
        textSize(20);
        text("New Scene",30,80);
        text(slider1val, 90, 180);
    }
}