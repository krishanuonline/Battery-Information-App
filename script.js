const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();
      //Battery charging check
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });

      function updateChargingInfo() {
        const isChargeing = battery.charging ? "Charging .." : "On Battery";
        batteryCharging.innerHTML = isChargeing;
      }
      //Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });
      function updateChargingTimeInfo() {
        console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " Second";
      }
      //Battery dis-charging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime;
      }
      //Battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      })
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;

      }
      // battery status

    });

  }
}
battery();