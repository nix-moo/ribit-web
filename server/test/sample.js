let row = {
  text : String,
  sizes: Array<Number>,
  repeats : Array<Number>
};

let repeat = {
  
}

const hat = {
  name: 'hat',
  sizes: [1, 2, 3],
  instructions: {
    CO: [`cast on ${x} stitches`, [96, 112, 128]],
    1: [`k1,p2,[k2,p2] to last st, k1`, [], [25, 28, 35]],
    2: []
  },
}

export { row, hat }
