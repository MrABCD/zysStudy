angular
    .module("module.map", ["ngRoute"])
    .controller("mapCtrl", [
        "$scope",
        function($scope) {
            var view = this;
            var marker,label,map,point,centerPoint,ele;
            this.msg = "地图yoyo";
            Map();

            function Map() {
                map = new BMap.Map("mapContainer");
                point = new BMap.Point(104.072653,30.671001);
                map.centerAndZoom(point,12);
                map.addControl(new BMap.MapTypeControl());
                map.setCurrentCity("成都");
                map.enableScrollWheelZoom(true);
                console.log("baiduMap is loaded");
                ele = angular.element(document.getElementsByTagName("label")[2]);
                
                map.addEventListener("dragend",dragendHandle);
                map.addEventListener("dragstart",dragstartHandle);
                centerPoint = map.getCenter();

                addLabel();
            }

            function dragendHandle(e){
                var lng = e.point.lng;
                var lat = e.point.lat;
                marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                ele.addClass('label_end');
                /*label.setStyle({
                    webkitTransform:"scale(1)"
                });*/
               /* angular.element(label).addClass('label');*/
               /*document.getElementsByTagName("label")*/
               /*document.querySelector(".BMapLabel").addClass('label');*/
               /* var ele = angular.element(document.getElementsByTagName("label")[1]);
                ele.addClass('label');*/
                setTimeout(function(){
                    marker.setAnimation(null);
                },800);
                console.log("draggend")
            }
            function dragstartHandle(e){
                /*map.clearOverlays();*/
                ele.addClass('label_start');
                console.log("will dragging");
                /*label.setStyle({
                    webkitTransform:"scale(0)"
                });*/
            }
            function addLabel(){
                marker = new BMap.Marker(centerPoint);
                map.addOverlay(marker);
                label = new BMap.Label("wenzi",{offset:new BMap.Size(-10,-19)});
               /* label.setStyle({
                    backgroundColor:"#555",
                    color:"#000",
                    webkitTransition:'500',
                    transition:500,
                    width: '1px',
                    overflow: 'hidden'
                });*/
                marker.setLabel(label);

                console.log("addLabeled");
            }
        }
    ])
