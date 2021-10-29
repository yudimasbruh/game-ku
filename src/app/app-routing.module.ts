import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'leaderboard',component:LeaderboardComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
