function rmRelative(loc) {
  rm(__dirname + "/../" + loc);
}

rmRelative("browser.js");
rmRelative("browser.min.js");
rmRelative("external-helpers.js");
rmRelative("external-helpers.min.js");
