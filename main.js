var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.seekpng.com/png/full/270-2703114_questionnaire-for-smart-mom-cartoon.png", "https://clipartstation.com/wp-content/uploads/2017/11/father-clipart.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBL22Ei_NK-osSDoap4tycqVIfvFIO8hlo5OC4vsWL4ijAhaSwVlTfHZzpm-7EyQq_Y9M&usqp=CAU", "https://i.pinimg.com/originals/d4/1f/09/d41f094d518ebe9738f8eb1392ce31a5.jpg", "https://image.shutterstock.com/image-vector/illustration-featuring-elderly-woman-sitting-260nw-108226247.jpg","https://mpng.subpng.com/20180509/wgw/kisspng-grandfather-clip-art-5af367b0477f74.3137164415259012322929.jpg"];
var names = ["Family Book","Indrani Dutta (Mother)", "Prosenjit Dutta (Father)", "Gayatri Dutta (Paternal Grandma)", "Proddut Kumar Dutta (Paternal Grandpa)", "Ratna Chatterjee (Maternal Grandma)","Alok Chatterjee (Maternal Grandpa)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
