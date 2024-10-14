import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { amountForumPostsHome } from '../../../config';
import { JokesComponent } from '../jokes/jokes.component';
import { LinkSectionComponent } from '../link-section/link-section.component';
import { LinkComponent } from '../link/link.component';
import { NewsComponent } from '../news/news.component';
import { SearchComponent } from '../search/search.component';
import { ToastComponent } from '../toast/toast.component';
import { AppService } from '../app.service';

@Component({
    selector: "app-home",
    standalone: true,
    imports: [
        CommonModule,
        LinkComponent,
        FormsModule,
        NgOptimizedImage,
        NewsComponent,
        LinkSectionComponent,
        SearchComponent,
        ToastComponent,
        JokesComponent,
    ],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    protected readonly amountForumPostsHome = amountForumPostsHome
    jokesEnabled = true

    constructor(private appService: AppService) {
        this.appService.getSettings.subscribe((settings) => {
            this.jokesEnabled = settings.jokesEnabled
        })
    }
}
