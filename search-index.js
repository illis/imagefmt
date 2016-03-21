var searchIndex = {};
searchIndex['imagefmt'] = {"items":[[3,"Image","imagefmt","Image struct returned from the read functions.",null,null],[12,"w","","",0,null],[12,"h","","",0,null],[12,"fmt","","",0,null],[12,"buf","","",0,null],[3,"Info","","Holds basic info about an image.",null,null],[12,"w","","",1,null],[12,"h","","",1,null],[12,"ct","","",1,null],[4,"ColFmt","","Color format – determines color type and channel order.",null,null],[13,"Auto","","",2,null],[13,"Y","","",2,null],[13,"YA","","",2,null],[13,"AY","","",2,null],[13,"RGB","","",2,null],[13,"RGBA","","",2,null],[13,"BGR","","",2,null],[13,"BGRA","","",2,null],[13,"ARGB","","",2,null],[13,"ABGR","","",2,null],[4,"ColType","","Color type – these are categories of color formats.",null,null],[13,"Auto","","",3,null],[13,"Gray","","",3,null],[13,"GrayAlpha","","",3,null],[13,"Color","","",3,null],[13,"ColorAlpha","","",3,null],[4,"Error","","Error.",null,null],[13,"InvalidData","","",4,null],[13,"InvalidArg","","",4,null],[13,"Unsupported","","",4,null],[13,"Internal","","",4,null],[13,"Io","","",4,null],[5,"read_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[5,"read_info_from","","Like `read_info` but reads from a reader. If it fails, it seeks back to where started.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"p"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_from","","Like `read` but reads from a reader.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"write","","Writes an image and converts it to requested color type.",null,null],[5,"write_region","","Writes a region of an image and converts it to requested color type.",null,null],[0,"png","","",null,null],[3,"ExtChunk","imagefmt::png","PNG extension chunk.",null,null],[12,"name","","",5,null],[12,"data","","",5,null],[5,"read_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"detect","","",null,{"inputs":[{"name":"r"}],"output":{"name":"bool"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_chunks","","Like `png::read` but also returns the requested extension chunks.",null,null],[5,"write","","Writes an image and converts it to requested color type.",null,null],[5,"write_chunks","","Like `png::write` but also writes the given extension chunks.",null,null],[0,"tga","imagefmt","",null,null],[5,"read_info","imagefmt::tga","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"detect","","",null,{"inputs":[{"name":"r"}],"output":{"name":"bool"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"write","","Writes an image and converts it to requested color type.",null,null],[0,"bmp","imagefmt","",null,null],[5,"read_info","imagefmt::bmp","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"detect","","",null,{"inputs":[{"name":"r"}],"output":{"name":"bool"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"write","","Writes an image and converts it to requested color type (grayscale not supported).",null,null],[0,"jpeg","imagefmt","",null,null],[5,"read_info","imagefmt::jpeg","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"detect","","",null,{"inputs":[{"name":"r"}],"output":{"name":"bool"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[6,"Result","imagefmt","The type returned from all the functions.",null,null],[11,"clone","","",0,{"inputs":[{"name":"image"}],"output":{"name":"image"}}],[11,"eq","","",1,{"inputs":[{"name":"info"},{"name":"info"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"info"},{"name":"info"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"info"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"info"}],"output":{"name":"info"}}],[11,"eq","","",2,{"inputs":[{"name":"colfmt"},{"name":"colfmt"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"colfmt"},{"name":"colfmt"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"colfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"colfmt"}],"output":{"name":"colfmt"}}],[11,"eq","","",3,{"inputs":[{"name":"coltype"},{"name":"coltype"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"coltype"},{"name":"coltype"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"coltype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"coltype"}],"output":{"name":"coltype"}}],[11,"convert","","Converts the image into a new allocation.",0,{"inputs":[{"name":"image"},{"name":"colfmt"}],"output":{"name":"result"}}],[11,"color_type","","Returns the color type of the color format.",2,{"inputs":[{"name":"colfmt"}],"output":{"name":"coltype"}}],[11,"has_alpha","","Returns whether `self` has an alpha channel.",2,{"inputs":[{"name":"colfmt"}],"output":{"name":"option"}}],[11,"has_alpha","","",3,{"inputs":[{"name":"coltype"}],"output":{"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"image"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"image"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",4,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","","",4,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",4,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",4,{"inputs":[{"name":"error"}],"output":{"name":"option"}}]],"paths":[[3,"Image"],[3,"Info"],[4,"ColFmt"],[4,"ColType"],[4,"Error"],[3,"ExtChunk"]]};
initSearch(searchIndex);
