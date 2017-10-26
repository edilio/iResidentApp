import { Component } from '@angular/core';

import { EmergencyPage } from '../emergency/emergency';
import { WorkOrdersPage } from '../work-orders/work-orders';
import { FamilyPage } from '../family/family';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FamilyPage;
  tab2Root = EmergencyPage;
  tab3Root = WorkOrdersPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
