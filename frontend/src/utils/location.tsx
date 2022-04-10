export const getGeoLocationStatus = async () => {
  if (navigator.permissions) {
    const response = await navigator.permissions.query({ name: "geolocation" });
    if (response.state === "granted") {
      return "granted";
    } else if (response.state === "prompt") {
      return "prompt";
    } else {
      return "reject";
    }
  }
  return "unsupported";
};

export const getLocation = (callback: (params: any) => void) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback);
  }
};

export const getGeoLocationMessage = (status: string) => {
  if (status === "granted") {
    return "We are obtaining your location data.";
  }
  if (status === "reject") {
    return "You don't allow access to your location.";
  }
  if (status === "prompt") {
    return "You should allow access to your location to continue.";
  }
  if (status === "unsupported") {
    return "Geolocation is not supported by this browser.";
  }
  return "";
};

export const getGeoLocationErrorIcon = (status: string) => {
  if (status === "granted") {
    return "01n";
  }
  if (status === "reject") {
    return "11d";
  }
  if (status === "prompt") {
    return "solar-eclipse";
  }
  if (status === "unsupported") {
    return "11d";
  }
  return "01n";
};
