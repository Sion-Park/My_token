async function main(){
    const [deployer]=await ethers.getSigners();
    const My_Token = await ethers.getContractFactory("My_Token");
    const mytoken = await My_Token.deploy();
    await mytoken.deployed();

    console.log(mytoken.address);
    
}
main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });