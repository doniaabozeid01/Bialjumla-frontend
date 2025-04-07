import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // استيراد مكتبة Leaflet
import 'leaflet-control-geocoder'; // استيراد مكتبة Geocoder (إن أردت استخدامها)

@Component({
  selector: 'app-location-sidebar',
  templateUrl: './location-sidebar.component.html',
  styleUrls: ['./location-sidebar.component.scss']
})
export class LocationSidebarComponent implements OnInit {

  ngOnInit(): void {
    const map = L.map('map', {
      center: [51.505, -0.09],  // الموقع الافتراضي
      zoom: 13, // مستوى التكبير الافتراضي
      maxZoom: 18, // الحد الأقصى للتكبير
      minZoom: 10 // الحد الأدنى للتكبير
    });

    // إضافة طبقة خريطة OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // إضافة ميزة البحث عن الأماكن (إن أردت استخدامها)
    // L.Control.geocoder().addTo(map);

    // إضافة ماركر (علامة) على الخريطة
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('أهلاً بك في OpenStreetMap!')
      .openPopup();
  }
}
