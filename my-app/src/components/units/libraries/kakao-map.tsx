declare const window: typeof globalThis & {
  kakao: any;
};

export const kakaoMap = (add) => {
  const script = document.createElement("script");
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb&autoload=false&libraries=services";
  document.head.appendChild(script);

  script.onload = () => {
    window.kakao.maps.load(function () {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(add, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">거래희망장소</div>',
          });
          infowindow.open(map, marker);

          map.setCenter(coords);
        }
      });
    });
  };
};
