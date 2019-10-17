function generateDyFn(package) {
  // console.log(package.find(x => x.type === 'perkm'));
  let operations = ``;
  // let args = [];
  let perkm = package.find(x => x.type === 'perkm');
  let perextrakm = package.find(x => x.type === 'perextrakm');

  if (perkm) {
    console.log();
    // operations += `(${package.find(x => x.type === 'perkm').rate} * args[${args.length}])`;
    operations += `(${perkm.rate} * value.perkm)`;
    // args.push(`rateperkm`);
  }
  if (perextrakm) {
    // operations += ` + (${package.find(x => x.type === 'perextrakm').rate} * args[${args.length}])`;
    operations += ` + (${perextrakm.rate} * value.perextrakm)`;
    // args.push(`rateperextrakm`);
  }

  // console.log(`operationsoperations: ${operations}`);
  return {
    fn: function (value, ops) {
      console.log(`params: ${JSON.stringify([value])}`);
      console.log(`ops: ${ops}`);
      console.log('result:', eval(ops));
    },
    ops: operations
  }
}

let package = [{
  type: `perkm`,
  rate: 15
}, {
  type: `perextrakm`,
  rate: 10
}]
let abc = generateDyFn(package);
// console.log(abc.fn.toString());
// console.log('ops: ',abc.ops.toString()); 
console.log(abc.fn({ perkm: 10, perextrakm:12 }, abc.ops));


