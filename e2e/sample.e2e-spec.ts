import { AppiumDriver, createDriver, SearchOptions, nsCapabilities ,UIElement} from "nativescript-dev-appium";
import { assert } from "chai";
describe("sample scenario", async function () {
   let driver: AppiumDriver;
   before(async function () {
      nsCapabilities.testReporter.context = this;
      driver = await createDriver();
   });
   after(async function () {
      await driver.quit();
      console.log("Quit driver!");
   });
   it("App is Opened", async () => {
      assert(true);
   })
   // it("Button is present", async () => {
   //    const button = await driver.findElementByAutomationText("bt");
   //    const buttonText = await button.text();
   //    assert.equal(buttonText, "tapme");
   // });

   it("Change language button test",async()=>{
      const bt1=await driver.findElementByAutomationText("cl");
      const tt1=await bt1.text();
       console.log(tt1);
      await bt1.click();
   })


   it("The TextField present and works fine", async () => {
      const tf = await driver.findElementByAutomationText("tf");
      const cont=await tf.text();
      console.log(cont)
   })

   it("Get Weather button test",async()=>{
      const bt=await driver.findElementByAutomationText("getbtn");
      const tt=await bt.text();
      console.log(tt);
      await bt.click();
   })

  

   it("App Closed",async()=>{
      console.log("closed")
   })

   // it("Test for same automationtext in two different tags", async () => {
   //    const la = await driver.findElementByAutomationText("l1");
   //    const latxt = await la.text();
   //    console.log(latxt);
   // })

   // it("Click test on button",async()=>{
   //    const b=await driver.findElementByAutomationText("bt");
   //    await b.tap();
   // })

});
describe("sample 2", async function () {
   let driver: AppiumDriver;
   before(async function () {
      nsCapabilities.testReporter.context = this;
      driver = await createDriver();
   });
   after(async function () {
      await driver.quit();
      console.log("Quit driver!");
   });

   it("Test 1 Of suite 2",async ()=>{
      assert(true);
   })
   
});