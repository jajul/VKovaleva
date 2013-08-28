// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


function RandomPic_cnt(WSO_param,CNT_param)
{
var a=Math.round(Math.random()*CNT_param);
switch (WSO_param)
	{
	case "w":
	var WSO_folder = "wedding";
	break
	case "s":
	var WSO_folder = "studio";
	break
	case "o":
	var WSO_folder = "outdoor";
	break
	car
	}
var Fl_nme_pic= 1000 + a;
Txt_Fl_name = " " + Fl_nme_pic;
FnlLocFleNme = Txt_Fl_name.substring(2,5)+ "_s.jpg";

document.writeln("<a href='../wedding.html' class=KARTNK><img src='../images/" + WSO_folder + "/" + FnlLocFleNme + "' border='0px' alt=''></a>");
}