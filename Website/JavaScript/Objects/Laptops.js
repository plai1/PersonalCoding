const laptopMaker = (cpu, graphics, ram, memory, screenRes) => {
  return{
    cpu: cpu,
    graphics: graphics,
    ram: ram,
    memory: memory,
    screenResolution: screenRes
  }
}

const lap1 = laptopMaker('i3', 'GTX 550', '4 GB', '50 GB', '500 X 700')
const lap2 = laptopMaker('i5', 'GTX 1050', '16 GB', '500 GB', '1980 X 1080')
const lap3 = laptopMaker('i9', 'RTX 2080', '64 GB', '1 TB', '1980 X 1090')

console.log('hello'.typeof())
