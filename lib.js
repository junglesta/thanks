(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != null && cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != null && cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != null && cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:



(lib.DM72_35_10_pork_tenderloin = function() {
	this.initialize(img.DM72_35_10_pork_tenderloin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,719);


(lib.DM72_DMH_35_thermistor_dial = function() {
	this.initialize(img.DM72_DMH_35_thermistor_dial);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,760,793);


(lib.DMH_35_thermistor_alone = function() {
	this.initialize(img.DMH_35_thermistor_alone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1104,1103);


(lib.temp_display_146 = function() {
	this.initialize(img.temp_display_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,55);


(lib.temp_display_154 = function() {
	this.initialize(img.temp_display_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,55);


(lib.temp_display_dashes = function() {
	this.initialize(img.temp_display_dashes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,5);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WrongSpace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AsVHZQgSgCgiAAIj6AAQhJgKghgCIgDAAQgbgCgfAAIgCAAIgNgBQgugCgegFIhGgMQgkgGhJAAIjJAAQgcAAgRABIgnAAIg8gBQgiABgYAHQgOAEgMAGQgegEgnAEQgkAEgiAHIhbgJQiVgQhJgPQh6gZhWgxIhCgoIgIgFQgHgYgPgTQgIgKgQgPIgZgZQgZgdgWg6QgZg+gMgsQgXhIADgzQABgfALglQAGgUARgtIAFgOQAYAAAWAJIATAKIAQgGQAqgOAwABQAqAAAxALQAfAHA4ARQCcAvBjAZQCMAjB2APQBdAMB1AFQBLADCJACIZmATQAyABAbADQArAEAgANQAMAFALAHIL3gLQAXgKAcgIQA0gQB2gZIBxgXIBpgUQA7gKAvgEQBZgIAwAcIAJAGIKSABQAmAAASACQAeADAXAKQASAIAOANQAigMAiAGQAbgZAkgkIBIhJQAogpAdgiIAXgcIABgBIAAguQgRgSgKgZQgIgWgBgWIgLgLIABAAIASAJIAGASQAIARATAXIABABQAFBNAhBHIAHAPQgEAWgBAgQAAA/gCAMQgDAegNArIgLAkIgXAXQgNAPgGAMQgEALgCASIgCAeQgEAQgKAUQgGALgPAVQgoA7gjApIggAjQgOAQgJAPIg2APIhBARQglAIgdgBIACAQQgogBguAMQgfAHgXANQgQgJgSgEQgigHgiAMIg2gJQglgFgeADIAAgSQjGAfjrARQmCAbl5gLIgagJQhXgYiOAAQhZAAg1AJQgWAEgtALIhDAOQhGAMh2gGQiMgGgvADIhQAHQgvAFgggCQg+gHgfgCQg3gEgjAOIgPAHQh+gRipALIhSAIIgZgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.7,-47.7,573.5,95.5);


(lib.ThermometerHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(50).call(this.frame_99).wait(1));

	// 146
	this.instance = new lib.temp_display_146();
	this.instance.parent = this;
	this.instance.setTransform(-60,-66,2.125,2.125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(1));

	// 154
	this.instance_1 = new lib.temp_display_154();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-66,2.125,2.125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({_off:true},1).wait(50));

	// Dashes
	this.instance_2 = new lib.temp_display_dashes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-107,-12,2.1,1.69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},6).wait(9).to({_off:false},0).to({_off:true},6).wait(20).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},6).wait(9).to({_off:false},0).to({_off:true},6).wait(20));

	// Background
	this.instance_3 = new lib.DM72_DMH_35_thermistor_dial();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-199,-190,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-190,397.5,414.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_thermistor_alone();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,198.2,198), null);


(lib.drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgYBMQgEgHgCgIQgFgBgGgDIAAgBQAAgOgFgGQgEgFgKgEQACgQgBgUIgBgUIACAAIAKgFQAGgCAGgJQAIgJAFgEIAAgJQAIAAACgIIAIAHQgBAGAHADQAEADAIAAIAAAKQAMADAKAKQACAFAEACQAEAEgBABIAMADIAFAHIAABXg");
	this.shape.setTransform(1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.drag, new cjs.Rectangle(-4.8,-7.2,12.3,15.2), null);


(lib.CorrectSpace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AERGrQgggNgrgFQgbgDgzAAI5mgUQiJgBhKgDQh1gFhegMQh2gQiMgjQhigZicgvQg4gRgggHQgxgKgpgBQgxgBgqAPIgPAGIgTgKQgcgMgfACQgIgZgRgUQAdhFA1g7QABgVADgTQARiIBXhrQAdgIAWgPQATgOANgSIAKgDQAegHApgRIAWgJQA9ACAggCQApgCAdgMQASAAASgGQAngLAaggQATADAUgEQAQgDAPgHIACAAIA/AOQBQAQBSgPQA8gKAkgcIETAAQBIAiA5gBQAagBAYgGQAbAPAhABQAKAAAJgBIAUAAQAhgCAbgPQAbAIAfgFIACAAQAfAQApAKQAzANBBAEQAnADBPAAQBzAAAxgCQBcgEBHgOQAugKAXgEQAogIAeACQAVABAgAGIA1ALQAqAHA3AAQAbAABHgDQBlgHAygKQBBgMAxgaIR0AAQAUAVAeALQAkAOAkgFQAKAIAMAGQAoAVAvgKQAogJAagZIAZACQAmAAAhgMIAGgCQApAPA8gEQAogDBDgPIAEACQAnAUAwgKQAQgDAOgHIAFAAQAiAUAnABQAYABAWgGIAyAQQAiANBCAfQA8AYAsAAQAMAAAMgCQAUALASAFIAhAKQASAFALAKQAGAFAHAKIALASQAPAUA5AjQAxAfANAeQAEAJADARQAEATADAIQAJAeAlAmIAAAAIALALQABAVAJAWQAJAZARASIAAAuIgBABIgXAcQgcAigoAqIhJBJQgkAkgbAYQgigGghANQgPgNgSgIQgWgLgfgDQgSgCglAAIqSAAIgKgGQgvgchZAHQgvAEg7ALIhpAUIhxAXQh3AZg0APQgcAIgXALIr2AKQgLgGgMgFg");
	this.shape.setTransform(0,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-64.4,568.1,87.7);


(lib.ThermometerDrag = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Hiding Shape (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANuTiQgQgQgOgRIiACAIurusIwKAAIAAqVIivAAIAAxAIVTAAIAAEsIKpAAIAANjIAAAAIgCgBIMvMuIiACAQARANAQARQBfBeAACGQAACGhfBeQheBfiGAAQiGAAhehfg");
	mask.setTransform(7.3,16.6);

	// Thermometer
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(20.9,20.9,1.211,1.211,0,0,0,98.4,98.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:99.1,regY:99,x:25.9,y:25.8},0).wait(1).to({x:29.9,y:29.8},0).wait(1).to({x:33.6,y:33.5},0).wait(1).to({x:37.1,y:37},0).wait(1).to({x:40.5,y:40.3},0).wait(1).to({x:43.6,y:43.5},0).wait(1).to({x:46.6,y:46.5},0).wait(1).to({x:49.4,y:49.3},0).wait(1).to({x:52.1,y:51.9},0).wait(1).to({x:54.6,y:54.4},0).wait(1).to({x:56.9,y:56.8},0).wait(1).to({x:59.1,y:59},0).wait(1).to({x:61.2,y:61.1},0).wait(1).to({x:63.2,y:63.1},0).wait(1).to({x:65.1,y:64.9},0).wait(1).to({x:66.8,y:66.7},0).wait(1).to({x:68.5,y:68.3},0).wait(1).to({x:70,y:69.9},0).wait(1).to({x:71.5,y:71.4},0).wait(1).to({x:72.9,y:72.8},0).wait(1).to({x:74.3,y:74.1},0).wait(1).to({x:75.5,y:75.4},0).wait(1).to({x:76.8,y:76.6},0).wait(1).to({x:77.9,y:77.8},0).wait(1).to({x:79.1,y:78.9},0).wait(1).to({x:80.2,y:80},0).wait(1).to({x:81.3,y:81.1},0).wait(1).to({x:82.3,y:82.2},0).wait(1).to({x:83.4,y:83.2},0).wait(1));

	// drag
	this.drag = new lib.drag();
	this.drag.parent = this;
	this.drag.setTransform(133.5,132.9);
	this.drag.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.drag).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-98.3,240,239.8);


// stage content:
(lib._100000_en_35i_01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		stage.mouseMoveOutside = true;

		//dragger object
		var dragger = this.thermometer;

		//Correct and incorrect drop spaces.
		var right = this.AreaCorrect;
		var wrong = this.AreaWrong;

		//Enables touch
		createjs.Touch.enable(stage);


		//this drags with mouse, but not with fingers
		dragger.on("pressmove", function(evt){
			evt.currentTarget._goto(0);
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
			console.log("Drag Success");

			if(intersect(evt.currentTarget.drag, right)){
				console.log("Over Good Success");
				evt.currentTarget.alpha=.5;

			}else if(intersect(evt.currentTarget.drag, wrong)){
				console.log("Over Bad Success");
				evt.currentTarget.alpha=.2;

			}else{
				evt.currentTarget.alpha=1;
			}

			stage.update(evt);
		}, this);

		this.thermometer.on("pressup", function(evt){  //this function will be very custom, always
			//lock position of drag object and play animation if any
			dragger.x = dragger.x;
			dragger.y = dragger.y;
			console.log("Release Success");

			if(intersect(evt.currentTarget.drag, right)){    //Intersection testing for good
				console.log("Over Good Success");
				//Add Custom Code here (usually going to be "goToAndPlay("<frame>")")
				dragger.mouseEnabled = false;
				dragger.play();
				exportRoot.fb_reading.gotoAndPlay(1);
				evt.currentTarget.alpha=1;

			}else if(intersect(evt.currentTarget.drag, wrong)){  //intersection Testing for bad
				console.log("Over Bad Success");
				//Add Custom Code here (usually going to be "goToAndPlay("<frame>")")
				dragger.mouseEnabled = false;;
				dragger.play();
				exportRoot.fb_reading.gotoAndPlay(50);

				evt.currentTarget.alpha=1;
			}

			stage.update(evt);
		}, this);

		//returns true or false
		function intersect(drag, target){
			var pt = drag.localToLocal(drag.x, drag.y, target);
			if(target.hitTest(pt.x, pt.y)){
				return true;
			}else{
				return false;
			}
		}


	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525252").s().p("AgzA9QgTgVAAgoQAAgnATgVQASgVAhAAQBGAAABBTIAAAEIhxAAQABAbAKAPQAMAOAUAAQASAAAKgGQAKgHAEgLIAXAHQgOAlgzAAQghAAgTgVgAgdgxQgMANgBAWIBWAAQgDgZgLgLQgKgMgUAAQgSAAgLANg");
	this.shape.setTransform(851.8,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525252").s().p("AguA9QgSgVAAgoQAAgnASgVQASgVAfAAQAZAAAQAMQAQANAEAWIgbACQgCgNgJgIQgIgIgPAAQgUAAgKAOQgJAOAAAhQAAAfAKAPQAKAPATAAQAOAAAKgHQAJgIACgQIAbACQgDAXgRAOQgQANgZAAQggAAgSgVg");
	this.shape_1.setTransform(836.2,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525252").s().p("AgMBtIAAieIAZAAIAACegAgMhSIAAgaIAZAAIAAAag");
	this.shape_2.setTransform(825.2,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_3.setTransform(817.8,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525252").s().p("AguA9QgSgVAAgoQAAgnASgVQASgVAfAAQAZAAAQAMQAQANAEAWIgbACQgCgNgJgIQgIgIgPAAQgUAAgKAOQgJAOAAAhQAAAfAKAPQAKAPATAAQAOAAAKgHQAJgIACgQIAbACQgDAXgRAOQgQANgZAAQggAAgSgVg");
	this.shape_4.setTransform(806.2,29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_5.setTransform(790.8,29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525252").s().p("AgjBRIAAh5IgBglIAZAAIABAhIAAAAQAHgVAGgHQAJgIAPAAIAKACIAAAYQgFgCgIAAQgRAAgHAPQgKAOABAaIAABSg");
	this.shape_6.setTransform(777.6,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525252").s().p("AhPBnIAAjNIBWAAQAiAAAUAQQATAQAAAeQAAAdgTARQgUARggAAIg8AAIAABQgAgzABIA4AAQAuAAABgpQAAgogxAAIg2AAg");
	this.shape_7.setTransform(762.3,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AgkAMIAAgXIBJAAIAAAXg");
	this.shape_8.setTransform(738.5,29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525252").s().p("AgrBIQgRgJgEgVIAXgFQADANALAGQAKAGASAAQAUAAAKgHQAJgFAAgNQAAgJgHgGQgGgGgOgEIgSgEQgXgHgKgEQgJgGgGgIQgFgIAAgLQAAgXAPgLQAQgLAcAAQAbAAAPAJQAQAJAEAVIgYADQgCgLgKgFQgJgGgRAAQgQAAgJAGQgIAFAAALQAAAGADAFQAEAFAGADQAHADAVAFQAVAFAKAFQAJADAFAGQAGAFACAHQADAHAAAJQAAAWgQANQgRAMgfAAQgcAAgQgKg");
	this.shape_9.setTransform(717.5,29.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("AgzA9QgTgVAAgoQAAgnATgVQATgVAgAAQBGAAAABTIAAAEIhwAAQAAAbAMAPQALAOAUAAQASAAAKgGQALgHADgLIAYAHQgPAlgzAAQghAAgTgVgAgdgxQgMANgBAWIBVAAQgCgZgKgLQgLgMgUAAQgSAAgLANg");
	this.shape_10.setTransform(701.7,29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525252").s().p("AgjBRIAAh5IgBglIAYAAIABAhIABAAQAHgVAGgHQAJgIAPAAIALACIAAAYQgGgCgJAAQgQAAgHAPQgJAOAAAaIAABSg");
	this.shape_11.setTransform(689.2,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525252").s().p("AgzBEQgMgNAAgeIAAhpIAbAAIAABkQAAAPADAJQADAJAHAEQAGADANAAQASAAALgNQALgNAAgXIAAhbIAbAAIAAB8QAAAcABAGIgZAAIgBgEIAAgIIAAgPIgBAAQgJAQgMAHQgMAHgRAAQgaAAgMgNg");
	this.shape_12.setTransform(675,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525252").s().p("AgTA+IAAhpIgSAAIAAgTIATAAIAIgjIAQAAIAAAjIAeAAIAAATIgeAAIAABjQAAAMAEAFQAEAEAJAAIAPgCIAAAUQgNADgNAAQgfAAAAgkg");
	this.shape_13.setTransform(662.6,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525252").s().p("AhABGQgMgNAAgWQAAgZAQgMQAQgNAkgBIAjAAIAAgJQAAgTgIgJQgIgIgRAAQgSAAgIAGQgIAGgBANIgcgCQAHgrA5AAQAcAAAQAOQAPANAAAaIAABDQAAAMADAGQADAGAIAAIAJgBIAAAQQgKADgKAAQgPAAgHgIQgGgIgBgQIgBAAQgKASgNAIQgNAHgTAAQgYAAgMgMgAgBACQgSAAgKADQgKAEgFAHQgFAIAAALQAAANAHAHQAHAHANAAQAOAAALgGQALgHAHgLQAGgMAAgMIAAgNg");
	this.shape_14.setTransform(650.6,29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525252").s().p("AgjBRIAAh5IgBglIAYAAIABAhIABAAQAHgVAGgHQAJgIAPAAIALACIAAAYQgGgCgJAAQgQAAgHAPQgJAOAAAaIAABSg");
	this.shape_15.setTransform(637.4,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525252").s().p("AgzA9QgSgVAAgoQAAgnASgVQATgVAhAAQBFAAAABTIAAAEIhvAAQgBAbALAPQAMAOAVAAQARAAAKgGQAKgHAEgLIAYAHQgPAlgyAAQgiAAgTgVgAgdgxQgLANgBAWIBUAAQgCgZgKgLQgLgMgUAAQgSAAgLANg");
	this.shape_16.setTransform(623.3,29.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525252").s().p("AhCBwIAAi8IAAggIAZAAIABAEIAAALIABAKIAAAAQAHgOAMgHQALgHASAAQAdAAAPAUQAOATAAAqQAABSg6ABQgjAAgNgcIgBAAIABAZIAAA+gAgVhUQgJAHgEAOQgFANAAAXQAAAeAKAPQAKAPAVAAQAUAAAJgOQAJgPAAghQAAghgJgOQgJgOgUAAQgOgBgJAHg");
	this.shape_17.setTransform(606.9,32.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525252").s().p("ABPBRIAAhkQAAgXgGgJQgGgIgRAAQgRAAgKANQgKAMAAAYIAABbIgZAAIAAhkQABgXgHgJQgGgIgRAAQgRAAgJANQgKAMAAAYIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIAAAIIABAPIAAAAQAJgQALgHQALgHAPAAQATAAAKAIQAJAHAFAPQAIgQAMgHQAMgHAQAAQAZAAAKANQALANAAAeIAABpg");
	this.shape_18.setTransform(585.8,29.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525252").s().p("AgzA9QgSgVAAgoQAAgnASgVQATgVAhAAQBFAAAABTIAAAEIhvAAQgBAbALAPQAMAOAVAAQARAAAKgGQALgHADgLIAYAHQgPAlgyAAQgiAAgTgVgAgdgxQgMANAAAWIBUAAQgCgZgLgLQgKgMgUAAQgSAAgLANg");
	this.shape_19.setTransform(564.9,29.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525252").s().p("AgNBnIAAi2IhHAAIAAgXICpAAIAAAXIhHAAIAAC2g");
	this.shape_20.setTransform(547.4,27.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525252").s().p("AgoBlQgQgKgEgTIAagDQADALAKAGQAIAFAOAAQAoAAAAguIAAgZIgBAAQgIAPgNAIQgMAHgRAAQgdAAgOgTQgNgTAAgpQAAgqAOgUQAPgUAeAAQAQAAAMAIQAMAIAIAOIABgPIABgMIAZAAQgCAIAAAZIAAB4QAABDhCAAQgZAAgPgLgAgehMQgJAOAAAhQAAAgAJAOQAIAOAVAAQALAAAKgHQAKgIAFgNQAGgNAAgTQAAgTgGgOQgFgOgKgIQgJgHgLAAQgVAAgJAPg");
	this.shape_21.setTransform(521.2,32.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525252").s().p("AAlBRIAAhkQAAgPgDgJQgDgJgHgEQgHgDgNAAQgSAAgLANQgLANAAAXIAABbIgaAAIAAh8QAAgcgBgGIAZAAIAAAEIABAIIAAAPIABAAQAJgQAMgHQAMgHAQAAQAaAAANANQAMANAAAeIAABpg");
	this.shape_22.setTransform(504.8,29.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525252").s().p("AgMBtIAAieIAZAAIAACegAgMhSIAAgaIAZAAIAAAag");
	this.shape_23.setTransform(493.1,26.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#525252").s().p("AAiBtIg0hJIgUAQIAAA5IgaAAIAAjZIAaAAIAACHIBFhMIAfAAIg/BDIBCBbg");
	this.shape_24.setTransform(483.3,26.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_25.setTransform(466.4,29.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#525252").s().p("Ag0A9QgSgVAAgoQAAhRBGAAQAlAAARAUQARAUAAApQAAApgSAVQgTAUgiAAQgiAAgSgVgAggguQgKAPAAAfQAAAfAKAQQAKAQAWAAQAXAAAKgQQAKgPAAggQAAgggJgPQgKgPgXAAQgWAAgLAQg");
	this.shape_26.setTransform(449.7,29.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#525252").s().p("AgvBdQgXgNgMgYQgMgYAAggQAAgxAbgcQAbgcAtAAQAiAAAWANQAWANALAZIgbAJQgIgSgPgKQgQgJgWAAQghAAgUAWQgSAWgBAmQABAlATAXQAUAXAhAAQArAAAXgrIAWAMQgMAagYAOQgXAOgeAAQgfAAgWgNg");
	this.shape_27.setTransform(430.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Borders
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F5F5F5").s().p("EBjSA4QIAAgBMjGiAAAIAAABIguAAIAAgBIgBAAIAAguIABAAMAAAhvwIAuAAMAAABvwMDGiAAAMAAAhoqIAuAAMAAABpZg");
	this.shape_28.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Border
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5F5F5").s().p("Ehj/AD6IAAnzMDH/AAAIAAHzg");
	this.shape_29.setTransform(640,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Thermometer Drag
	this.thermometer = new lib.ThermometerDrag();
	this.thermometer.parent = this;
	this.thermometer.setTransform(991.5,495,1,1,0,0,0,-52.7,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.thermometer).wait(1));

	// Correct Drop Area
	this.AreaCorrect = new lib.CorrectSpace();
	this.AreaCorrect.parent = this;
	this.AreaCorrect.setTransform(699.4,531.5,1,1,0,0,0,284.1,89.5);
	this.AreaCorrect.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.AreaCorrect).wait(1));

	// Wrong Drop Area
	this.AreaWrong = new lib.WrongSpace();
	this.AreaWrong.parent = this;
	this.AreaWrong.setTransform(704.3,586.5,1,1,0,0,0,286.8,119);
	this.AreaWrong.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.AreaWrong).wait(1));

	// Thermometer Head
	this.fb_reading = new lib.ThermometerHead();
	this.fb_reading.parent = this;
	this.fb_reading.setTransform(1044.2,211.1,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.fb_reading).wait(1));

	// Text Caption
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAEAGABAHQgBAIgEAGQgFAFgIAAQgIAAgEgFg");
	this.shape_30.setTransform(717.9,202.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABNQgBANAEAIQAFAHALAAIAJAAIAHgCIABAUIgKADIgOABQgJAAgIgDg");
	this.shape_31.setTransform(709.5,194.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_32.setTransform(701.1,193.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABNQgBANAEAIQAFAHALAAIAJAAIAHgCIAAAUIgJADIgOABQgJAAgHgDg");
	this.shape_33.setTransform(686.2,194.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_34.setTransform(677.3,196.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgDgJgIgHQgIgHgPgBQgMABgJAGg");
	this.shape_35.setTransform(664.1,196.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_36.setTransform(650.5,196.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_37.setTransform(636.3,196.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_38.setTransform(624.5,193.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_39.setTransform(606.4,196.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgJQgCgKAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABNQgBANAFAIQAEAHALAAIAJAAIAGgCIACAUIgKADIgOABQgJAAgIgDg");
	this.shape_40.setTransform(593.1,194.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABBcQgGgDgEgFQgGgGgCgJQgCgKAAgNIAAhOIgXAAIAAgUIAXAAIAAgjIAYgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAFAIQAEAHALAAIAJAAIAGgCIABAUIgJADIgOABQgJAAgIgDg");
	this.shape_41.setTransform(576.8,194.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_42.setTransform(563.6,196.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAXgNQAWgOAqAAIAAgDQAAgGgCgIQgDgHgHgGQgHgGgOAAQgKAAgKADQgKADgHAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgDgTIAAAAQgGAJgMAGQgLAHgPAAQgOAAgKgGgAABABQgNACgJAHQgKAHAAAOQAAANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_43.setTransform(547.7,196.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAjBJIgWhGIgHgWIgGgYIAAAAIgGAYIgHAWIgYBGIgYAAIgsiQIAbAAIAUBIIAFAXIAGAXIABAAIAGgXIAGgWIAYhJIAVAAIAXBHIAHAYIAFAXIABAAIAFgXIAHgXIAVhIIAaAAIgvCQg");
	this.shape_44.setTransform(529.8,196.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_45.setTransform(504.1,196.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_46.setTransform(487.6,196.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag7BTIALgEIAMgJQAGgEAGgHQAGgIAEgKIACgEIAAgCIAAgDIgBgEIg2iFIAdAAIAgBWIAFAPIADAOIAAAAIAFgOIAFgQIAchVIAcAAIgnBoIgSApQgHARgHAMQgIAMgJAHQgKAJgJAEQgIAEgFABg");
	this.shape_47.setTransform(472.3,199.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_48.setTransform(451.4,196.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_49.setTransform(439.8,196.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_50.setTransform(426.6,196.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgLQgDgIgHgGQgIgGgMAAQgMABgJAHQgKAIgEAKIgBAFIAAAHIAABYIgbAAIAAjVIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGANQAFAKAAATIAABXg");
	this.shape_51.setTransform(410.7,193);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAjBJIgXhGIgHgWIgFgYIAAAAIgGAYIgIAWIgXBGIgYAAIgsiQIAbAAIATBIIAHAXIAEAXIACAAIAFgXIAHgWIAYhJIAVAAIAXBHIAHAYIAFAXIABAAIAFgXIAGgXIAWhIIAaAAIgwCQg");
	this.shape_52.setTransform(391.4,196.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_53.setTransform(365.1,199.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_54.setTransform(348.8,196.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_55.setTransform(337,193.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAEAIQAFAHALAAIAJAAIAHgCIAAAUIgJADIgOABQgJAAgHgDg");
	this.shape_56.setTransform(328.4,194.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_57.setTransform(315.2,196.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_58.setTransform(303.4,193.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_59.setTransform(291.7,196.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgVIAXAAIACAYIABAAQAIgNAMgIQANgGARgBQARABAPAIQANAJAIARQAIAQAAAXQAAAagKAQQgIARgQAJQgPAIgQAAQgOABgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAJgEAOIgBAGIgBAFIAAAZIABAGIAAAFQAEANALAJQAKAIAPAAQANAAAJgHQAKgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_60.setTransform(275.4,199.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhDBoIAAicIAAgaIgBgVIAXAAIACAYIABAAQAIgNAMgIQANgGARgBQARABAPAIQANAJAIARQAIAQAAAXQAAAagKAQQgIARgQAJQgPAIgQAAQgOABgMgHQgLgFgHgLIgBAAIAABPgAgYhJQgLAJgEAOIgBAGIgBAFIAAAZIABAGIAAAFQAEANALAJQAKAIAPAAQANAAAKgHQAJgHAGgMQAFgMAAgRQAAgOgFgNQgFgMgKgIQgKgHgNAAQgNAAgLAJg");
	this.shape_61.setTransform(252,199.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_62.setTransform(239.5,193.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AABBcQgFgDgFgFQgGgGgCgJQgDgKABgNIAAhOIgXAAIAAgUIAXAAIAAgjIAZgHIAAAqIAlAAIAAAUIglAAIAABNQgBANAEAIQAFAHALAAIAJAAIAHgCIABAUIgKADIgOABQgJAAgIgDg");
	this.shape_63.setTransform(230.9,194.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgIgHgOgBQgNABgIAGg");
	this.shape_64.setTransform(212.2,196.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgLQgDgIgHgGQgIgGgMAAQgMABgJAHQgKAIgEAKIgBAFIAAAHIAABYIgbAAIAAjVIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGANQAFAKAAATIAABXg");
	this.shape_65.setTransform(196.4,193);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAFAIQAEAHALAAIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_66.setTransform(182.9,194.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAjBrIAAhUQAAgLgDgLQgDgIgHgGQgIgGgMAAQgMABgJAHQgKAIgEAKIgBAFIAAAHIAABYIgbAAIAAjVIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGANQAFAKAAATIAABXg");
	this.shape_67.setTransform(163.4,193);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAANAFAIQAEAHALAAIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_68.setTransform(150,194.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQAAAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_69.setTransform(141.6,193.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAjBJIgXhGIgHgWIgFgYIAAAAIgGAYIgIAWIgXBGIgYAAIgsiQIAcAAIASBIIAHAXIAEAXIABAAIAGgXIAHgWIAYhJIAVAAIAWBHIAIAYIAGAXIAAAAIAFgXIAGgXIAWhIIAZAAIgvCQg");
	this.shape_70.setTransform(127.1,196.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAEAHQAFAIALgBIAJAAIAHgCIABAUIgKADIgOABQgJAAgHgDg");
	this.shape_71.setTransform(715.9,156.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgFAEgHAAQgHAAgEgEg");
	this.shape_72.setTransform(707.5,155.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhDBoIAAidIgBgZIAAgVIAYAAIABAYIABAAQAHgNANgIQANgGARgBQARAAAOAKQAOAIAIARQAIARAAAWQAAAagKAQQgIARgPAJQgPAJgSgBQgNAAgMgFQgLgGgIgLIAAAAIAABPgAgYhJQgLAIgEAPIgCAGIAAAGIAAAYIAAAGIABAFQAEANALAIQALAJAOAAQANAAAJgHQAKgHAGgNQAFgLAAgRQAAgPgFgMQgFgMgKgHQgJgIgOAAQgNAAgLAJg");
	this.shape_73.setTransform(689.6,161.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_74.setTransform(672.4,158.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_75.setTransform(660.1,158.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgJgRAAgVQAAgZAJgQQAJgSAPgJQAOgJASgBQAQABALAHQAMAGAEAIIABAAIAAhWIAaAAIAACuIAAAVIABARIgXAAIgBgZIgBAAQgHAMgMAIQgNAIgRAAQgRAAgPgJgAgVgPQgKAIgEALQgGANAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgGIgBgFQgDgMgJgJQgLgJgOAAQgNABgKAGg");
	this.shape_76.setTransform(645.5,155.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRAAgVQgBgZAKgQQAIgSAPgJQAPgJARgBQAQABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIAAARIgXAAIgCgZIAAAAQgHAMgMAIQgMAIgRAAQgSAAgPgJgAgVgPQgJAIgGALQgFANAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgGIgBgFQgDgMgLgJQgJgJgPAAQgNABgKAGg");
	this.shape_77.setTransform(622.3,155.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_78.setTransform(605.9,158.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_79.setTransform(590,158.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgQAQIAGgZIAFgZIAdgCQgEANgFAOIgKAZIgJAUIgTABIAHgVg");
	this.shape_80.setTransform(573.5,165.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgmBjQgNgJgIgRQgIgRgBgVQAAgZAJgQQAJgSAPgJQAPgJARgBQAQABALAHQAMAGAEAIIABAAIAAhWIAaAAIAACuIAAAVIABARIgXAAIgCgZIAAAAQgHAMgMAIQgNAIgQAAQgSAAgPgJgAgVgPQgKAIgEALQgGANAAARQAAAOAFANQAEALAKAIQAJAHAOAAQANAAALgIQALgJADgPIABgFIABgGIAAgZIgBgGIgBgFQgDgMgJgJQgKgJgPAAQgNABgKAGg");
	this.shape_81.setTransform(561.7,155.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_82.setTransform(545.5,158.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_83.setTransform(529,158.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgaBsIAAh8IgVAAIAAgUIAVAAIAAgHQAAgQAEgNQADgNAKgJQAHgHAIgDQAKgDAJAAIANABIAKADIgEAUIgHgCIgKgBQgLAAgGAGQgGAFgDAKQgBAKAAALIAAAIIAiAAIAAAUIgiAAIAAB8g");
	this.shape_84.setTransform(517.2,154.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_85.setTransform(498.2,158.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAjBqIAAhTQAAgMgDgKQgDgIgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAKIgBAFIAAAHIAABXIgbAAIAAjUIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGAMQAFAMAAASIAABWg");
	this.shape_86.setTransform(482.4,155);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_87.setTransform(468.9,156.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_88.setTransform(453.7,158.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgMADQgLADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_89.setTransform(440.5,158.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgNBIIg3iPIAcAAIAdBQIAGATIAFASIAAAAIAGgSIAHgTIAchQIAcAAIg5CPg");
	this.shape_90.setTransform(425.7,158.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_91.setTransform(410.2,158.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_92.setTransform(391.6,158.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_93.setTransform(378.4,158.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAEAHQAFAIALgBIAJAAIAHgCIAAAUIgJADIgOABQgJAAgHgDg");
	this.shape_94.setTransform(365.8,156.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_95.setTransform(353.4,158.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgIAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgIABgHADQgHAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAAMAFQALAFAHAOQAIAOAAAZIAABUg");
	this.shape_96.setTransform(333.4,158.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_97.setTransform(312.6,158.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ABPBKIAAhRQgBgVgHgMQgIgLgQgBQgMABgHAHQgJAGgDAKIgCAHIgBAHIAABYIgYAAIAAhWQAAgRgIgLQgHgLgQgBQgHABgIADQgGAEgFAGQgEAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAIgEAMAAQAQAAAKAIQAJAIAGANIAAAAQADgGAFgFIAJgIQAGgFAHgDQAIgCAKAAQALAAAKAFQALAFAIAOQAIAOAAAZIAABUg");
	this.shape_98.setTransform(291.9,158.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_99.setTransform(275.4,158.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABAMAGQALAHAHALQAGAKADAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgCAJIBNAAQAAgJgEgKQgCgJgIgHQgJgHgOgBQgNABgIAGg");
	this.shape_100.setTransform(262.2,158.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAjBqIAAhTQAAgMgDgKQgDgIgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAKIgBAFIAAAHIAABXIgbAAIAAjUIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGAMQAFAMAAASIAABWg");
	this.shape_101.setTransform(246.3,155);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgJQgDgKAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAFAHQAEAIALgBIAJAAIAGgCIABAUIgJADIgOABQgJAAgHgDg");
	this.shape_102.setTransform(232.9,156.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgMADQgNADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_103.setTransform(214.2,158.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAjBqIAAhTQAAgMgDgKQgDgIgHgGQgIgGgMAAQgMAAgJAIQgKAIgEAKIgBAFIAAAHIAABXIgbAAIAAjUIAbAAIAABbIAAAAQADgGAFgEQAFgFAGgEQAGgDAHgCQAGgCAHAAQAHAAAJADQAJACAIAIQAHAGAGAMQAFAMAAASIAABWg");
	this.shape_104.setTransform(198.3,155);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgJQgCgKgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABNQAAAOAEAHQAFAIALgBIAJAAIAHgCIAAAUIgJADIgOABQgJAAgHgDg");
	this.shape_105.setTransform(184.9,156.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgGBpQgNAAgNgDQgNgDgJgGIAGgUQAIAFALADQAKAEAOAAQANAAAKgFQALgFAGgLQAGgMAAgSIAAgQIgBAAQgGAKgMAHQgLAHgQAAQgSAAgOgJQgOgJgIgQQgIgPAAgVQAAgYAKgRQAJgSAPgJQAPgJARAAQALABAJADQAJAEAGAGQAGAFADAHIABAAIABgWIAXAAIgBARIAAAXIAABTQAAAZgGAQQgFAQgKAJQgLAKgOAEQgMAEgMAAIgDgBgAgchFQgMAOAAAaQAAAOAFAMQAEALAKAHQAKAHANAAQAMAAAKgHQAKgHAEgMIACgHIAAgHIAAgaIAAgGIgBgGQgEgMgJgIQgJgIgPAAQgSAAgMAPg");
	this.shape_106.setTransform(164.8,161.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_107.setTransform(149.3,158.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_108.setTransform(138.4,158.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRAAgVQABgZAIgQQAJgSAPgJQAOgJATgBQAPABALAHQALAGAGAIIAAAAIAAhWIAaAAIAACuIABAVIABARIgYAAIgBgZIgBAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgKAIgEALQgGANAAARQAAAOAFANQAFALAJAIQAKAHANAAQAOAAAKgIQALgJADgPIACgFIAAgGIAAgZIAAgGIgCgFQgCgMgLgJQgKgJgPAAQgMABgKAGg");
	this.shape_109.setTransform(123.8,155.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgQAQIAGgZIAFgZIAdgDQgEAOgFANIgKAaIgJATIgTACIAHgVg");
	this.shape_110.setTransform(724.5,127.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAIALQAGALALAFQAMAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_111.setTransform(714.2,120.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_112.setTransform(702.6,120.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgiBFQgLgGgIgNQgIgOAAgaIAAhTIAbAAIAABPQgBAVAIAMQAHANASAAQAIAAAHgEQAHgDAFgGQAEgFADgGIACgGIAAgHIAAhYIAbAAIAABoIAAAVIABATIgXAAIgCgYIgBAAQgDAGgGAGQgHAGgJAFQgKAEgMAAIgCAAQgKAAgLgFg");
	this.shape_113.setTransform(688.6,120.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AACBcQgHgDgEgFQgGgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_114.setTransform(675.2,118.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQAAgGgDgIQgCgHgHgGQgHgGgOAAQgKAAgKADQgJADgIAFIgHgSQAKgGAMgDQANgDAMgBQAWABAMAIQAMAJAFANQAFAOAAAPIAAA1IAAASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQANAAAIgHQAJgHAEgKIABgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_115.setTransform(662.8,120.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_116.setTransform(651.9,120.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAPgKQAQgKAUgBQARABAMAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQALAFANAAQAOAAAJgCQAKgCAHgDIAFATQgHADgMADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgDgKQgEgJgIgHQgHgHgPgBQgMABgJAGg");
	this.shape_117.setTransform(638.7,120.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AhDBoIAAidIAAgZIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAKQANAIAIARQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOgBgMgFQgMgGgGgLIgBAAIAABPgAgYhJQgLAJgEAPIgBAFIgBAGIAAAZIABAFIAAAFQAEANAKAIQAMAJAOAAQANAAAKgHQAKgHAEgNQAGgLAAgRQAAgPgFgMQgFgMgKgHQgJgIgOAAQgNAAgLAJg");
	this.shape_118.setTransform(623.1,123.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("ABOBKIAAhRQABgVgJgMQgHgLgQgBQgMABgIAHQgIAGgEAKIgBAHIAAAHIAABYIgZAAIAAhWQAAgRgIgLQgIgLgOgBQgJABgHADQgGAEgEAGQgFAGgCAHIgCAGIAAAHIAABWIgaAAIAAhpIAAgUIgBgTIAXAAIABAYIABAAQAEgIAGgGQAGgGAJgDQAJgEAMAAQAOAAALAIQAKAIAEANIABAAQADgGAFgFIAIgIQAHgFAIgDQAHgCALAAQAJAAALAFQAMAFAHAOQAIAOAAAZIAABUg");
	this.shape_119.setTransform(601.6,120.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIgBAGIAAAFIhlAAQAAASAIALQAGALAMAFQAKAFANAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgRAAQgVAAgQgKgAgTgxQgJAHgEAKQgEAKgBAJIBLAAQABgJgEgKQgDgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_120.setTransform(581.6,120.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AACBcQgHgDgFgFQgFgGgCgKQgDgJAAgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAFAHQAEAIALAAIAJgBIAGgCIABAVIgJACIgOABQgJAAgHgDg");
	this.shape_121.setTransform(568.9,118.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQASABAMAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgHADgLADQgNADgQAAQgWAAgQgKgAgTgxQgJAHgEAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgIgHgPgBQgMABgJAGg");
	this.shape_122.setTransform(550.2,120.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_123.setTransform(534.4,116.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_124.setTransform(520.9,118.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgeBCQgQgJgJgQQgIgQAAgWQAAgWAIgRQAIgSAQgKQAPgKAUgBQASABALAGQAMAHAHALQAGAKADAMQADALAAALIAAAGIgBAFIhlAAQAAASAHALQAHALAMAFQALAFAMAAQAOAAAJgCQAKgCAHgDIAFATQgIADgLADQgMADgSAAQgVAAgQgKgAgTgxQgIAHgFAKQgFAKgBAJIBNAAQAAgJgEgKQgCgJgJgHQgHgHgPgBQgNABgIAGg");
	this.shape_125.setTransform(502.2,120.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_126.setTransform(488.9,116.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOApAAIAAgDQAAgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgIAFIgFgSQAIgGANgDQANgDAMgBQAWABANAIQAMAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgHAJgKAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgKAHABAOQAAANAGAGQAIAGAKAAQANAAAKgHQAJgHACgKIABgEIABgEIAAgYIgFAAQgMAAgMABg");
	this.shape_127.setTransform(473,120.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AABBcQgGgDgFgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAagHIAAAqIAlAAIAAAUIglAAIAABOQgBANAEAHQAFAIALAAIAJgBIAHgCIABAVIgKACIgOABQgJAAgIgDg");
	this.shape_128.setTransform(461.1,118.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_129.setTransform(441.6,120.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_130.setTransform(426,117.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgMAOQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_131.setTransform(409.3,126);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_132.setTransform(397.6,120.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAFQgEAEgIAAQgGAAgFgEg");
	this.shape_133.setTransform(385.8,117.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_134.setTransform(374.1,120.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_135.setTransform(362.3,116.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_136.setTransform(354.7,120.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_137.setTransform(341.5,120.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AglBjQgOgJgIgRQgJgRABgVQAAgZAJgQQAIgSAPgJQAOgJATgBQAPABALAHQALAFAGAKIAAAAIAAhXIAaAAIAACvIABAUIABARIgYAAIgCgZIAAAAQgGAMgNAIQgMAIgSAAQgRAAgOgJgAgVgPQgJAIgGAMQgFAMAAARQAAAOAFANQAEALAKAIQAKAHANAAQAOAAAKgIQAKgJAFgPIABgFIAAgGIAAgZIAAgFIgBgGQgEgMgKgJQgKgJgPABQgMAAgKAGg");
	this.shape_138.setTransform(325.1,117.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAkBKIAAhSQAAgMgDgKQgEgJgHgGQgHgGgNAAQgMAAgJAIQgKAIgDALIgBAGIgBAGIAABWIgaAAIAAhpIgBgUIAAgTIAXAAIABAYIABAAQAEgHAGgGQAHgGAJgEQAKgEALAAQAIAAAIACQAJADAIAHQAIAHAFAMQAFAMAAATIAABVg");
	this.shape_139.setTransform(308.7,120.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgeBCQgQgJgIgQQgJgQAAgWQAAgWAIgRQAJgSAOgKQAQgKAUgBQARABANAGQALAHAHALQAHAKACAMQADALAAALIAAAGIgBAFIhlAAQABASAGALQAHALALAFQAMAFAMAAQAOAAAKgCQAJgCAHgDIAEATQgGADgNADQgMADgQAAQgWAAgQgKgAgTgxQgIAHgFAKQgFAKAAAJIBLAAQABgJgDgKQgEgJgHgHQgJgHgOgBQgMABgJAGg");
	this.shape_140.setTransform(292.9,120.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AACBcQgGgDgGgFQgFgGgCgKQgCgJgBgNIAAhOIgWAAIAAgUIAWAAIAAgjIAZgHIAAAqIAmAAIAAAUIgmAAIAABOQAAANAEAHQAFAIALAAIAJgBIAHgCIAAAVIgJACIgOABQgJAAgHgDg");
	this.shape_141.setTransform(280.3,118.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAdBqIgxhFIgOAPIAAA2IgaAAIAAjTIAaAAIAACFIABAAIAGgIIAHgIIApgyIAgAAIg3A7IA/BVg");
	this.shape_142.setTransform(263.3,116.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgiBKIAAhjIgBgYIAAgVIAXAAIAAAdIACAAQAFgPAKgIQAKgJAOAAIAEAAIADABIAAAZIgEgBIgFAAQgOAAgJAJQgIAKgDAPIgBAFIAAAHIAABMg");
	this.shape_143.setTransform(251,120.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgkBDQgPgJgJgRQgKgRAAgXQAAgXAKgRQAJgRARgJQAQgJATgBQAVABAQAJQAPAJAJARQAJARAAAWQAAAagLARQgLARgQAIQgQAIgRAAQgUAAgQgJgAgYguQgKAIgEANQgFAMAAAOQAAAQAGAMQAFANAKAHQAKAHAMAAQANAAAKgHQAJgHAGgNQAGgNAAgQQAAgMgEgNQgFgMgJgJQgKgJgPAAQgPAAgKAJg");
	this.shape_144.setTransform(237,120.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AhDBoIAAidIAAgZIgBgWIAXAAIABAZIABAAQAIgNANgHQANgIARAAQASAAAOAKQANAIAIARQAIARAAAWQAAAagJAQQgKASgPAIQgPAJgQAAQgOgBgMgFQgMgGgGgLIgBAAIAABPgAgYhJQgLAJgEAPIgBAFIgBAGIAAAZIABAFIAAAFQAEANAKAIQAMAJAOAAQANAAAKgHQAKgHAEgNQAGgLAAgRQAAgPgFgMQgFgMgKgHQgJgIgOAAQgNAAgLAJg");
	this.shape_145.setTransform(220.8,123.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AglBGQgKgGgFgKQgFgJAAgLQAAgaAWgNQAXgOAqAAIAAgDQgBgGgCgIQgCgHgHgGQgHgGgNAAQgLAAgKADQgKADgHAFIgGgSQAJgGAMgDQANgDAMgBQAWABAMAIQANAJAEANQAFAOgBAPIAAA1IABASIACARIgYAAIgCgTIgBAAQgGAJgLAGQgMAHgOAAQgPAAgKgGgAABABQgNACgJAHQgJAHAAAOQgBANAIAGQAHAGALAAQAMAAAJgHQAKgHACgKIACgEIAAgEIAAgYIgFAAQgMAAgMABg");
	this.shape_146.setTransform(197.8,120.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_147.setTransform(178.6,120.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgMBlIAAiQIAaAAIAACQgAgLhIQgEgFAAgHQAAgHAEgEQAFgFAGAAQAIAAAEAFQAEAEAAAHQABAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_148.setTransform(169.2,117.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgcBJQgLgDgIgEIAHgUQAGAEAJADQAKADAKAAQANAAAHgGQAHgGAAgJQAAgKgGgGQgGgGgOgFQgTgHgKgKQgJgKAAgNQAAgMAGgKQAGgJALgGQALgFAPgBQALABAJACQAJADAGADIgGATIgMgFQgIgDgKAAQgLAAgGAGQgGAGAAAIQAAAJAHAFQAGAFANAGQATAHAKAJQAKAKAAAQQgBAUgOAMQgOALgZABQgMAAgKgDg");
	this.shape_149.setTransform(153.4,120.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgMBlIAAiQIAZAAIAACQgAgLhIQgEgFgBgHQABgHAFgEQAEgFAGAAQAHAAAFAFQAEAEABAHQgBAHgEAFQgFAEgHAAQgHAAgEgEg");
	this.shape_150.setTransform(144,117.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAjBqIAAhTQAAgLgDgKQgDgJgHgGQgIgGgMAAQgMABgJAHQgKAHgEAKIgBAGIAAAHIAABXIgbAAIAAjTIAbAAIAABaIAAAAQADgFAFgFQAFgFAGgDQAGgEAHgCQAGgCAHAAQAHAAAJACQAJAEAIAGQAHAIAGALQAFAMAAASIAABWg");
	this.shape_151.setTransform(132.2,116.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgMBlIAAizIg+AAIAAgWICVAAIAAAWIg+AAIAACzg");
	this.shape_152.setTransform(116.4,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	// Food Dish (Background)
	this.instance = new lib.DM72_35_10_pork_tenderloin();
	this.instance.parent = this;
	this.instance.setTransform(-121,131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(519,360,1401,850);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/DM72_35_10_pork_tenderloin.jpg", id:"DM72_35_10_pork_tenderloin"},
		{src:"images/DM72_DMH_35_thermistor_dial.jpg", id:"DM72_DMH_35_thermistor_dial"},
		{src:"images/DMH_35_thermistor_alone.png", id:"DMH_35_thermistor_alone"},
		{src:"images/temp_display_146.png", id:"temp_display_146"},
		{src:"images/temp_display_154.png", id:"temp_display_154"},
		{src:"images/temp_display_dashes.png", id:"temp_display_dashes"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
