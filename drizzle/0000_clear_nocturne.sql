CREATE TABLE `progress` (
	`id` text PRIMARY KEY NOT NULL,
	`done` integer DEFAULT 0 NOT NULL,
	`note` text DEFAULT '' NOT NULL
);
