const testData = {
  title: 'Very Long Socks',
  progress: 30,
  author: 'Purl Soho',
  ravelry: 'https://www.ravelry.com/patterns/library/very-long-socks',
  size: '0 (1, 0, 0)',
  rows: [
    { num: 0, text: 'CUFF' },
    {
      num: 1,
      text:
        'Cast 84 (100, 108, 116) stitches onto 3 double pointed needles. [Needles A and C: 28 (34, 36, 38) stitches; Needle B: 28 (32, 36, 40) stitches]',
    },
    {
      num: 2,
      text:
        'Place marker and join for working in the round, being careful not to twist the stitches.',
    },
    {
      num: 3,
      text: 'Round 1: K1, *p2, k2, repeat from * to last 3 stitches, p2, k1.',
    },
    {
      num: 4,
      text:
        'Repeat Round 1 until piece measures 9 (10, 10, 11) inches from cast-on edge.',
    },
    { num: 5, text: 'LEG' },
    {
      num: 6,
      text:
        'Round 1: K1, *p2, k2, repeat from * to last 3 stitches, purl 2 together (p2tog), k1. [1 stitch decreased]',
    },
    {
      num: 7,
      text:
        'Round 2: K1, *p2, k2, repeat from * to last 2 stitches, knit 2 together (k2tog). [1 stitch decreased]',
    },
    {
      num: 8,
      text:
        'Round 3: K1, *p2, k2, repeat from * to last 5 stitches, p2, k1, k2tog. [1 stitch decreased]',
    },
    {
      num: 9,
      text:
        'Round 4: K1, *p2, k2, repeat from * to last 4 stitches, p2, k2tog. [1 stitch decreased]',
    },
    {
      num: 10,
      text: 'Round 5: K1, *p2, k2, repeat from * to last 3 stitches, p2, k1.',
    },
    { num: 11, text: 'Repeat Round 5 eight (11, 12, 13) more times.' },
    {
      num: 12,
      text:
        'Round 6: K1, p2tog through the back loop (tbl), *k2, p2 repeat from * to last stitch, k1. [1 stitch decreased]',
    },
    {
      num: 13,
      text:
        'Round 7: Slip slip knit (ssk), *k2, p2, repeat from * to last stitch, k1. [1 stitch decreased]',
    },
    {
      num: 14,
      text:
        'Round 8: Ssk, k1, *p2, k2, repeat from * to last 3 stitches, p2, k1. [1 stitch decreased]',
    },
    {
      num: 15,
      text:
        'Round 9: Ssk, *p2, k2, repeat from * to last 3 stitches, p2, k1. [1 stitch decreased]',
    },
    { num: 16, text: 'Repeat Round 5 nine (12, 13, 14) more times.' },
    {
      num: 17,
      text:
        'Repeat from Round 1 three more times. [52 (68, 76, 84) stitches total; Needles A and C: 12 (18, 20, 22) stitches; Needle B: 28 (32, 36, 40) stitches]',
    },
    { num: 18, text: 'HEEL FLAP' },
    {
      num: 19,
      text:
        'Set-Up Row 1 (right side): K1, [p2, k2] 3 (4, 4, 5) times, p0 (0, 2, 0), turn work so wrong side is facing you.',
    },
    {
      num: 20,
      text:
        'Set-Up Row 2 (wrong side): K0 (0, 2, 0), [p2, k2] 6 (8, 9, 10) times, p2 (2, 0, 2). NOTE: These 26 (34, 38, 42) stitches are the beginning of the Heel Flap, and for this section, you will work back and forth on just these 26 (34, 38, 42) stitches.',
    },
    {
      num: 21,
      text:
        'Arrange stitches so that 26 (34, 38, 42) Heel Flap stitches are on one needle, and remaining stitches are on hold on other two needles: 13 (17, 19, 21) stitches each.',
    },
    {
      num: 22,
      text:
        'Work following rows back and forth, turning work between each row…',
    },
    {
      num: 23,
      text:
        'Row 1: *Slip 1 (see Note) with yarn in back (wyib), k1, repeat from * to end of row.',
    },
    {
      num: 24,
      text: 'Row 2: Slip 1 with yarn in front (wyif), purl to end of row.',
    },
    {
      num: 25,
      text: 'Repeat Rows 1 and 2 twelve (17, 18, 19) more times',
    },
    { num: 26, text: 'TURN THE HEEL' },
    {
      num: 27,
      text:
        'Row 1 (right side): K15 (19, 21, 23) ssk, k1, turn work so wrong side is facing you and there are 17 (21, 23, 25) stitches on left needle and 8 (12, 14, 16) stitches on right needle.',
    },
    {
      num: 28,
      text:
        'Row 2 (wrong side): Slip 1, p5, p2tog, p1, turn work. [16 (20, 22, 24) stitches on left needle and 8 (12, 14, 16) stitches on right needle]',
    },
    {
      num: 29,
      text:
        'Row 3: Slip 1, knit to 1 stitch before gap, ssk (with stitch before gap and stitch after gap), k1, turn work.',
    },
    {
      num: 30,
      text: 'Row 4: Slip 1, purl to 1 stitch before gap, p2tog, p1, turn work.',
    },
    {
      num: 31,
      text:
        'Repeat Rows 3 and 4 until all Heel stitches have been worked. [16 (20, 22, 24) Heel stitches remain]',
    },
    { num: 32, text: 'GUSSET' },
    {
      num: 33,
      text:
        'Knit across 16 (20, 22, 24) Heel stitches with new needle (now called Needle A).',
    },
    {
      num: 34,
      text:
        'With Needle A, pick up and knit 13 (18, 19, 20) stitches along Heel Flap. [29 (38, 41, 44) stitches on Needle A]',
    },
    {
      num: 35,
      text:
        'With new needle (now called Needle B), k0 (0, 2, 0), [p2, k2] 6 (8, 9, 10) times, p2 (2, 0, 2).',
    },
    {
      num: 36,
      text:
        'With new needle (now called Needle C), pick up and 13 (18, 19, 20) stitches along Heel Flap.',
    },
    {
      num: 37,
      text:
        'With Needle C, knit 8 (10, 11, 12) stitches from Needle A. [68 (90, 98, 106) total stitches; Needles A and C: 21 (28, 30, 32) stitches; Needle B: 26 (34, 38, 42) stitches]',
    },
    {
      num: 38,
      text:
        'Round 1: For Needle A, knit to last 3 stitches, k2tog, k1; for Needle B, k0 (0, 2, 0), [p2, k2] 6 (8, 9, 10) times, p2 (2, 0, 2); for Needle C, k1, ssk, knit to end of needle. [2 stitches decreased]',
    },
    {
      num: 39,
      text:
        'Round 2: For Needle A, knit to end of needle; for Needle B, k0 (0, 2, 0), [p2, k2] 6 (8, 9, 10) times, p2 (2, 0, 2); for Needle C, knit to end of needle.',
    },
    {
      num: 40,
      text:
        'Repeat Rounds 1 and 2 until 52 (68, 76, 84) stitches remain. [Needles A and C: 13 (17, 19, 21) stitches; Needle B: 26 (34, 38, 42) stitches]',
    },
    { num: 41, text: 'FOOT' },
    {
      num: 42,
      text:
        'Round 1: For Needle A, knit to end of needle; for Needle B, k0 (0, 2, 0), [p2, k2] 6 (8, 9, 10) times, p2 (2, 0, 2); for Needle C, knit to end of needle.',
    },
    {
      num: 43,
      text:
        'Repeat Round 1 until Foot measures 1 1/4 (1 3/4, 2 1/4, 2 1/2) inches less than desired final length, measuring from back edge of Heel.',
    },
    { num: 44, text: 'TOE' },
    { num: 45, text: 'Set-Up Round: Knit to end of round.' },
    {
      num: 46,
      text:
        'Round 1: For Needle A, knit to last 3 stitches, k2tog, k1; for Needle B, k1, ssk, knit to last 3 stitches, k2tog, k1; for Needle C, k1, ssk, knit to end of needle. [4 stitches decreased]',
    },
    { num: 47, text: 'Rounds 2–4: Knit to end of round.' },
    {
      num: 48,
      text:
        'Repeat Rounds 1–4 one (2, 3, 3) more times. [44 (56, 60, 68) stitches]',
    },
    {
      num: 49,
      text:
        'Repeat Rounds 1 and 2 three (3, 3, 4) times. [32 (44, 48, 52) stitches]',
    },
    {
      num: 50,
      text: 'Repeat Round 1 two (3, 4, 5) times. [24 (32, 32, 32) stitches]',
    },
    {
      num: 51,
      text:
        'With Needle C, knit the 6 (8, 8, 8) stitches from Needle A so there are 12 (16, 16, 16) stitches on each of two needles.',
    },
    { num: 52, text: 'Use Kitchener Stitch to graft the Toe closed.' },
  ],
};

module.exports = testData;
