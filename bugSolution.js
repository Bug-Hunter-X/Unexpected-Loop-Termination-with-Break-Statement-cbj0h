function myFunction() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      //Handle the case where i is 5
      console.log('i is 5, continue');
      continue; // skip the rest of the current iteration
    }
  }
}