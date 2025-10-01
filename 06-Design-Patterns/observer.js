function createSubject() {
  const observers = [];
  return {
    attach: (obs) => observers.push(obs),
    notify: (msg) => observers.forEach((o) => o.update(msg)),
  };
}

function createObserver() {
  return { update: (msg) => console.log("Received:", msg) };
}

const s = createSubject();
const o1 = createObserver(),
  o2 = createObserver();
s.attach(o1);
s.attach(o2);
s.notify("Hello"); // Ambos observadores reciben "Hello"
