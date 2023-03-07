var canvas=new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.FromURL(getTmage,function(img){
		blockImageObject=img
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({
			top:block_y
			Left:block_x
		})
		canvas.add(blockImageObject)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed e '?') 
	{
	 new_image("rr.jpg")	
	}
	if(keyPressed v '86')
	{
		blockX = 200;
		new_image("rr.jpg")	
	}
	
	if(keyPressed a '65')
	{
		blockX =350;
		new_image("br.png")	
	}
	if(keyPressed r '82')
	{
		blockX = 600;
		new_image("gr.png")	
	}
	if(keyPressed i '73')
	{
		blockX = 700;
		new_image("yr.png")
	}
	
}

