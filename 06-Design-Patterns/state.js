const onState = { handle: () => console.log("ON") };
const offState = { handle: () => console.log("OFF") };

function createSwitch() {
  let state = offState;
  return {
    press: function () {
      state.handle();
      state = state === offState ? onState : offState;
    },
  };
}

const s = createSwitch();
s.press(); // OFF
s.press(); // ON
s.press(); // OFF
