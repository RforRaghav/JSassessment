/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const collectionNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _countryName, _age, _bling) {
  let nft = {
    name: _name,
    countryName: _countryName,
    age: _age,
    bling: _bling
  };
  collectionNFT.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < collectionNFT.length; i++) {
    console.log("Name: " + collectionNFT[i].name);
    console.log("Country Name: " + collectionNFT[i].countryName);
    console.log("Age: " + collectionNFT[i].age);
    console.log("Bling: " + collectionNFT[i].bling);
    console.log("---------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total number of NFTs: " + collectionNFT.length);
}

// call your functions below this line
mintNFT("Raghav", "India", 19, "Platinum");
mintNFT("Maria", "Spain", 23, "Diamond");
mintNFT("Basim", "Iraq", 22, "Steel");
mintNFT("Arthur", "United States", 36, "Gold");

listNFTs();
