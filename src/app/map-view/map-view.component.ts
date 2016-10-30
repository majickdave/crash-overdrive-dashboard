import { Component, OnInit, OnChanges } from '@angular/core';
import { CyclistService } from '../cyclist.service';

declare var google: any;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements OnInit {

  title: string = "My first ng2 map project";
  lat: number = 32.72478;
  lng: number = -117.1635757;
  zoom: number = 14;
  
  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.lat,
        lng: this.lng
      }

    });

    var cyclists = this.cyclistService.getCyclists();
    var collisions = this.cyclistService.getCollisions();


    for (let cyclist of cyclists) {
      new google.maps.Marker({
        position: {
          lat: cyclist.lat,
          lng: cyclist.lng
        },
        map: map,
        title: cyclist.name,
        label: '✔'
      })
    }

    var collisionsToDisplay = [];
    
    for (let collision of collisions) {

      var collisionInfoWindow = new google.maps.InfoWindow({
        content: '...'
      })

      var marker = new google.maps.Marker({
        position: {
          lat: collision.lat,
          lng: collision.lng
        },
        map: map,
        title: collision.name,
        label: '✘',
        note: collision.note,
        phoneNumber: collision.phoneNumber,
        name: collision.name
      });

      collisionsToDisplay.push(marker);

    }

    for (let collision of collisionsToDisplay) {
      google.maps.event.addListener(collision, 'click', () => {

        console.log(collision);

        collisionInfoWindow.setContent( '<h4>Alert</h4>' +
                                        '<p>' + collision.note + '</p>' + 
                                        '<b> Name: </b>' + collision.name + '<br>' +
                                        '<b> Phone Number: </b>' + collision.phoneNumber + '<br>')
        collisionInfoWindow.open(map, collision);
      })
    }



  }

}
