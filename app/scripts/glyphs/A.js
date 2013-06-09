'use strict';

angular.module('prototyp0.glyphs')
	.config(function( glyphs ) {
		glyphs['A'] = {
			reference: {},
			formula: {
				0:  'M   20 0',
				1:  'vl  -20 0',
				2:  'l   200 {{xHeight}}',
				3:  'vl  -20 0',
				4:  'l   200 -{{xHeight}}',
				5:  'vl   -20 0',
				6:  'vL  {{ find({x: self[2].x, on: [self[5], self[3]] }) }}',
				7:  'L   {{ find({y: xHeight / 2, on: [self[5], self[6]] }) }}',
				8:  'L   {{ find({y: xHeight / 2, on: [self[0], self[6]] }) }}',
				9:  'Z',
				10: 'M   {{ find({y: xHeight / 2 + 20, on: [self[5], self[6]] }) }}',
				11: 'L   {{ self[6].xy }}',
				12: 'L   {{ find({y: xHeight / 2 + 20, on: [self[0], self[6]] }) }}',
				13: 'Z',

				after1: 'serif {{ {side:"bottom-left", on:[self[1], self[2]] } }}',
				before2: 'invertedSerif {{ {side:"bottom-left", on:[self[2], self[1]] } }}',
				after5: 'serif {{ {side:"bottom-left", on:[self[5], self[7]] } }}',
			},
			// hook that allows arbitrary javascript to prepare the context for the formula
			// if we really need it
			beforeProcessSegments: function( /*context, input, parentOrReference*/ ) {
				//return context;
			}
		};
	});

	/*
			glyph[0] = [ 'M', 665, 0 ];
			glyph[1] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[2] = [ 'c', 0, 0, -48, 0, -48, 0 ];
			glyph[3] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[4] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[5] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[6] = [ 'c', 0, 0, -79, 209, -79, 209 ];
			glyph[7] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[8] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[9] = [ 'c', 0, 0, -1, -1, -1, -1 ];
			glyph[10] = [ 'c', 0, 0, -316, 0, -316, 0 ];
			glyph[11] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[12] = [ 'c', 0, 0, -1, 1, -1, -1 ];
			glyph[13] = [ 'c', 0, 0, 1, -1, 1, -1 ];
			glyph[14] = [ 'c', 0, 0, -82, -209, -82, -209 ];
			glyph[15] = [ 'c', 0, 0, 1, -1, 1, -1 ];
			glyph[16] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[17] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[18] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[19] = [ 'c', 0, 0, -46, 0, -46, 0 ];
			glyph[20] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[21] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[22] = [ 'c', 0, 0, 1, 1, 1, 1 ];
			glyph[23] = [ 'c', 0, 0, 289, 741, 289, 741 ];
			glyph[24] = [ 'c', 0, 0, -1, 1, -1, 1 ];
			glyph[25] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[26] = [ 'c', 0, 0, 0, 1, 0, 1 ];
			glyph[27] = [ 'c', 0, 0, 43, 0, 43, 0 ];
			glyph[28] = [ 'c', 0, 0, 41, 0, 41, 0 ];
			glyph[29] = [ 'c', 0, 0, 290 - dim.s_height * 0.38978494623656, -744 + dim.s_height, 290 - dim.s_height * 0.38978494623656, -744 + dim.s_height ];
			glyph[30] = [ 'c', 0, 0, 1 + dim.s_width, -1, 1 + dim.s_width, -1 ];
			glyph[31] = [ 'c', 0, 0, 0, -1, 0, -1 ];
			glyph[32] = [ 'c', 0, 0, 0, -1, 0, -1 ];

			glyph[33] = [ 'M', 464, 293 ];
			glyph[34] = [ 'c', -1, 1, -1, 1, -1, 1 ];
			glyph[35] = [ 'c', -130, 342, -130, 342, -130, 342 ];
			glyph[36] = [ 'c', 0, 2, 0, 2, 0, 2 ];
			glyph[37] = [ 'c', -1, 0, -1, 0, -1, 0 ];
			glyph[38] = [ 'c', 0, -2, 0, -2, 0, -2 ];
			glyph[39] = [ 'C', 199, 294, 199, 294, 199, 294 ];
			glyph[40] = [ 'c', -1, -1, -1, -1, -1, -1 ];
			glyph[41] = [ 'c', 1, -1, 1, -1, 1, -1 ];
			glyph[42] = [ 'c', 1, 1, 1, 1, 1, 1 ];
			glyph[43] = [ 'c', 262, 0, 262, 0, 262, 0 ];
			glyph[44] = [ 'c', 1, -1, 1, -1, 1, -1 ];
			glyph[45] = [ 'C', 464, 293, 464, 293, 464, 293 ];
			*/
