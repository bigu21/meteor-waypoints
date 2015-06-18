Package.describe({
  summary: "Wrapper for waypoints.js",
  version: "0.0.3",
  git: "https://github.com/bigu21/meteor-waypoints.git",
  name: "bigu:waypoints"
});

Package.onUse(function(api) {
  if(api.versionsFrom)
    api.versionsFrom("METEOR@1.0");

  api.addFiles(['waypoints.min.js'], 'client');
  api.addFiles(['export.js'], 'client');
  api.export("Waypoint", 'client');
});
