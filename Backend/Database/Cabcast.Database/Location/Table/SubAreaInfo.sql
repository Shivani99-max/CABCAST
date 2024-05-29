﻿CREATE TABLE [Location].[SubAreaInfo]
(
    [Id] UNIQUEIDENTIFIER NOT NULL,
    [AreaInfoId] UNIQUEIDENTIFIER NOT NULL,
    [Name] NVARCHAR(25) NOT NULL,
    [SequenceId] INT NOT NULL IDENTITY, 
	[CreatedBy] UNIQUEIDENTIFIER NOT NULL,	
	[CreatedDate] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
	[ModifiedBy] UNIQUEIDENTIFIER NULL,
	[ModifiedDate] DATETIME2 NULL,
	[RowStatus] NVARCHAR(1) NOT NULL DEFAULT 'A'
    CONSTRAINT [PK_Location_SubAreaInfo] PRIMARY KEY NONCLUSTERED 
    (
       [Id] ASC
     )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    CONSTRAINT [FK_SubAreaInfo_AreaInfo] FOREIGN KEY ([AreaInfoId]) REFERENCES [Location].[AreaInfo]([Id])
    CONSTRAINT [FK_SubAreaInfo_RowStatusInfo] FOREIGN KEY ([RowStatus]) REFERENCES [Metadata].[RowStatusInfo]([RowStatus])
) ON [PRIMARY];
GO
CREATE UNIQUE CLUSTERED INDEX [IX_SubAreaInfo_SequenceId] ON [Location].[SubAreaInfo] ([SequenceId])