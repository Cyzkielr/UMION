const events = {};

function subscribe(name, callback) {
  if (!events[name])
    return;
    
  events[name].forEach(
    callback => callback(data)
  );
}

publish("supportUpdated");