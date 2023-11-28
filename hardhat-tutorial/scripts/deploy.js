async function main(){
    const [deployer]=await ethers.getSigners();
    const My_Token = await ethers.getContractFactory("My_Token");
    const mytoken = await My_Token.deploy();
    console.log(mytoken.target);
    
}
main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });
